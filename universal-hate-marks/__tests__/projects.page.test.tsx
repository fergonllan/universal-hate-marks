import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProjectsPage from "@/app/projects/page";

describe("ProjectsPage UI", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      } as Response)
    );
  });

  it("renders header and form", async () => {
    render(<ProjectsPage />);
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/New project name/i)).toBeInTheDocument();
  });

  it("allows creating a project", async () => {
    const fakeCreate = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            id: "1",
            name: "foo",
            createdAt: "2026-01-01T00:00:00.000Z",
          }),
      } as Response)
    );
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve([]) } as Response)
    );
    (global.fetch as jest.Mock).mockImplementationOnce(fakeCreate);
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            { id: "1", name: "foo", createdAt: "2026-01-01T00:00:00.000Z" },
          ]),
      } as Response)
    );

    render(<ProjectsPage />);

    fireEvent.change(screen.getByPlaceholderText(/New project name/i), { target: { value: "foo" } });
    fireEvent.click(screen.getByText(/Add/i));

    await waitFor(() => expect(fakeCreate).toHaveBeenCalled());
    expect(global.fetch).toHaveBeenCalledWith("/api/projects", expect.objectContaining({ method: "POST" }));
  });
});
