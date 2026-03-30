export default function Blog() {
  const blogs = [
    {
      title: "Intune Endpoint Security",
      img: "https://source.unsplash.com/400x250/?cybersecurity",
      desc: "Secure endpoints using Microsoft Intune best practices."
    },
    {
      title: "Zero Trust Security",
      img: "https://source.unsplash.com/400x250/?security",
      desc: "Modern enterprise security approach."
    },
    {
      title: "AI in Cybersecurity",
      img: "https://source.unsplash.com/400x250/?artificial-intelligence",
      desc: "Future of threat detection using AI."
    }
  ];

  return (
    <div className="section center">
      <h1>Blog</h1>

      <div className="grid">
        {blogs.map((b, i) => (
          <div key={i} className="card">
            <img src={b.img} style={{width:"100%", borderRadius:"10px"}} />
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}