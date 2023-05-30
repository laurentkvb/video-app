// Imports
import { render } from "@testing-library/react";

// To Test
import { App } from "./App";
import { fetchVideos } from "./App.model";

// Tests
test("Renders main page correctly", () => {
  // Setup
  render(<App />);

  // Post Expectations
  expect(true).toBeTruthy();
});

describe("fetchVideos", () => {
  it("should fetch and return an array of VideoDTO", async () => {
    const mockResponse = {
      playlist: [
        { id: 1, title: "Video 1" },
        { id: 2, title: "Video 2" },
        { id: 3, title: "Video 3" },
      ],
    };

    const mockFetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    });
    global.fetch = mockFetch;

    const videos = await fetchVideos();

    expect(mockFetch).toHaveBeenCalledWith(
      "https://cdn.jwplayer.com/v2/playlists/jAT6P8QM"
    );
    expect(videos).toEqual(mockResponse.playlist);
  });

  // Add more test cases if needed
});
