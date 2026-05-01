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
    >
      <input name="form-name" type="hidden" value="quote-request" />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-frost">
          Name
          <input
            autoComplete="name"
            className="min-h-12 rounded-md border border-white/15 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-smoke/70 focus:border-blue"
            name="name"
            required
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm text-frost">
          Work email
          <input
            autoComplete="email"
            className="min-h-12 rounded-md border border-white/15 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-smoke/70 focus:border-blue"
            name="email"
            required
            type="email"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-frost">
          Phone
          <input
            autoComplete="tel"
            className="min-h-12 rounded-md border border-white/15 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-smoke/70 focus:border-blue"
            name="phone"
            type="tel"
          />
        </label>
        <label className="grid gap-2 text-sm text-frost">
          Organisation
          <input
            autoComplete="organization"
            className="min-h-12 rounded-md border border-white/15 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-smoke/70 focus:border-blue"
            name="organisation"
            type="text"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-frost">
          Product interest
          <select
            className="min-h-12 rounded-md border border-white/15 bg-[#0b111d] px-4 text-white outline-none transition focus:border-blue"
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
        <label className="grid gap-2 text-sm text-frost">
          Estimated quantity
          <select
            className="min-h-12 rounded-md border border-white/15 bg-[#0b111d] px-4 text-white outline-none transition focus:border-blue"
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

      <label className="grid gap-2 text-sm text-frost">
        What are you trying to solve?
        <textarea
          className="min-h-36 rounded-md border border-white/15 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-smoke/70 focus:border-blue"
          name="message"
          placeholder="Tell us about your sites, workflows, hazardous-area requirements, remote support needs, or deployment timeline."
          required
        />
      </label>

      <button
        className="min-h-12 rounded-md bg-blue px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-glow transition hover:bg-[#5d82ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
        type="submit"
      >
        Send Quote Request
      </button>
    </form>
  );
}
