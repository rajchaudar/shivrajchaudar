export default function Pricing() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 min-h-screen text-gray-800 dark:text-gray-300">
      
      <h1 className="text-3xl font-bold mb-6">Products & Pricing</h1>

      <p className="mb-6">
        I provide professional digital services tailored to client requirements.
        Pricing depends on the scope, complexity, and timeline of the project.
      </p>

      <h2 className="text-xl font-semibold mb-3">Services Offered</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Web Development</li>
        <li>Full Stack Development</li>
        <li>Cloud & Deployment Support</li>
        <li>Consulting & Freelance Development</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Pricing Details</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Pricing varies based on project scope and requirements</li>
        <li>Final price is confirmed via email or call before payment</li>
        <li>Payments are accepted only after mutual agreement</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Delivery Information</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>All services are delivered digitally</li>
        <li>No physical products are shipped</li>
      </ul>

    </section>
  )
}