import metagen from "..";

describe("metagen", () => {
  it("should generate basic meta tags", () => {
    const result = metagen({
      title: "Test Title",
      desc: "Test Description",
      name: "Test Author",
    });

    expect(result).toContain("<title>Test Title</title>");
    expect(result).toContain(
      '<meta name="description" content="Test Description">'
    );
    expect(result).toContain('<meta name="author" content="Test Author">');
  });

  it("should generate open graph tags", () => {
    const result = metagen({
      title: "Test Title",
      url: "https://example.com",
      site_name: "Test Site",
      comments: true,
    });

    expect(result).toContain("<!-- Open Graph -->");
    expect(result).toContain('<meta property="og:type" content="website">');
    expect(result).toContain(
      '<meta property="og:url" content="https://example.com">'
    );
    expect(result).toContain(
      '<meta property="og:site_name" content="Test Site">'
    );
  });

  it("should generate twitter tags", () => {
    const result = metagen({
      title: "Test Title",
      twitter_handle: "testuser",
      twitter_card_type: "summary_large_image",
      comments: true,
    });

    expect(result).toContain("<!-- Twitter -->");
    expect(result).toContain(
      '<meta name="twitter:card" content="summary_large_image">'
    );
    expect(result).toContain('<meta name="twitter:site" content="@testuser">');
    expect(result).toContain(
      '<meta name="twitter:creator" content="@testuser">'
    );
  });

  it("should return empty array for invalid input", () => {
    const result = metagen({});
    expect(result).toEqual([]);
  });
});
