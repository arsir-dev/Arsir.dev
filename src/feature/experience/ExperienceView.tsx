export default function ExperienceView() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Experience</h1>
      <p className="mt-2 text-gray-700">
        This is the Experience view where users can explore various experiences.
      </p>
      <div className="mt-4">
        {/* Additional experience-related components can be added here */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="border">01</div>
          <div className="...">02</div>
          <div className="...">03</div>
          <div className="col-span-2 ...">04</div>
          <div className="...">05</div>
          <div className="...">06</div>
          <div className="col-span-2 ...">07</div>
        </div>
        <div className="p-4 border rounded shadow col-span-2">
          {" "}
          Experience Item 1
        </div>
        <div className="p-4 border rounded shadow mt-2 col-span-2">
          {" "}
          Experience Item 2
        </div>
      </div>
    </main>
  );
}
