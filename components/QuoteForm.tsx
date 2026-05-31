import { products } from "@/content/site";

export function QuoteForm() {
  return (
    <form
      action="/thank-you"
      className="grid gap-5"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="POST"
      name="quote-request"
      netlify-honeypot="bot-field"
    >
      <input name="form-name" type="hidden" value="quote-request" />
      <p
        aria-hidden="true"
        style={{
          position: "absolute",
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          height: "1px",
          width: "1px",
          margin: "-1px",
          padding: 0,
          border: 0
        }}
      >
        <label>
          Do not fill this out:{" "}
          <input autoComplete="off" name="bot-field" tabIndex={-1} />
        </label>
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-700">
          Name
          <input
            autoComplete="name"
            className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-navy outline-none transition placeholder:text-smoke/70 focus:border-blue"
            name="name"
            required
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-700">
          Work email
          <input
            autoComplete="email"
            className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-navy outline-none transition placeholder:text-smoke/70 focus:border-blue"
            name="email"
            required
            type="email"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-700">
          Phone
          <input
            autoComplete="tel"
            className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-navy outline-none transition placeholder:text-smoke/70 focus:border-blue"
            name="phone"
            type="tel"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-700">
          Organisation
          <input
            autoComplete="organization"
            className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-navy outline-none transition placeholder:text-smoke/70 focus:border-blue"
            name="organisation"
            type="text"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-700">
          Product interest
          <select
            className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-navy outline-none transition focus:border-blue"
            name="product"
            required
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.slug} value={product.name}>
                {product.name}
              </option>
            ))}
            <option value="Unsure">Not sure yet</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm text-slate-700">
          Estimated quantity
          <select
            className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-navy outline-none transition focus:border-blue"
            name="quantity"
          >
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="21-50">21-50</option>
            <option value="50+">50+</option>
            <option value="Unsure">Unsure</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm text-slate-700">
        What are you trying to solve?
        <textarea
          className="min-h-36 rounded-md border border-slate-300 bg-white px-4 py-3 text-navy outline-none transition placeholder:text-smoke/70 focus:border-blue"
          name="message"
          placeholder="Tell us about your sites, workflows, hazardous-area requirements, remote support needs, or deployment timeline."
          required
        />
      </label>

      <button
        className="min-h-12 rounded-md bg-amber px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-amber transition hover:bg-[#e85f00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
        type="submit"
      >
        Send Quote Request
      </button>
    </form>
  );
}
