export default function BlogDetail({ params }: { params: { slug: string } }) {

  const blogs: any = {
    "intune-security": {
      title: "Intune Endpoint Security",
      content: "Full guide on securing endpoints using Microsoft Intune..."
    },
    "zero-trust": {
      title: "Zero Trust Model",
      content: "Zero Trust is a security concept centered on no trust..."
    }
  };

  const blog = blogs[params.slug];

  if (!blog) return <h1>Blog Not Found</h1>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}