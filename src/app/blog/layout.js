const BlogLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <h2>This is the Blog Layout</h2>
          {children}
        </div>
      </body>
    </html>
  );
};

export default BlogLayout;
