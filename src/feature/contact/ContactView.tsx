export default function ContactView() {
  return (
    <main
      id="contact"
      className="min-h-screen max-w-screen bg-neutral-900 text-neutral-100 flex items-center px-10"
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-10">
          Let’s Get in Touch: Ways to Connect with Me
        </h2>

        <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">
          Thank you for your interest in reaching out. I’m always open to
          thoughtful conversations, professional opportunities, and meaningful
          collaboration. If you have a specific question or would like to
          discuss a potential project, please feel free to contact me directly
          via email at{" "}
          <a href={process.env.NEXT_PUBLIC_LINK_MAIL} className="text-yellow-400 flex items-center transition-all">
            arsir.dev@gmail.com
          </a>
          . I do my best to respond to all messages within 24 hours, though
          response times may vary during busy periods.
        </p>
      </div>
    </main>
  );
}
