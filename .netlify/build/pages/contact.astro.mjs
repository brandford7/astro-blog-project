/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { g as getEntryBySlug, c as config } from '../chunks/_astro_content_DLSEDk1O.mjs';
import { $ as $$Base, m as markdownify, a as $$Icon } from '../chunks/Base_CYd4vrw1.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntryBySlug("pages", "contact");
  const { address, email, phone } = config.contactinfo;
  const { title, description, meta_title, image } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="h2 page-heading">${unescapeHTML(markdownify(title))}</h1> <div class="row md:gx-5 gy-5"> <div class="sm:col-5 md:col-4"> <p class="mb-8 text-2xl font-bold text-theme-dark">Contact Info</p> <ul class="flex flex-col space-y-8"> <li> <div class="flex text-theme-dark items-center text-xl"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:card-account-details-star-outline", "class": "mr-3 text-primary" })} <p class="font-semibold">Address</p> </div> <p class="mt-2 leading-5 pl-8">${unescapeHTML(markdownify(address))}</p> </li> <li> <div class="flex text-theme-dark items-center text-xl"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:email", "class": "mr-3 text-primary" })} <p class="font-semibold">Email</p> </div> <p class="mt-2 leading-5 pl-8 content">${unescapeHTML(markdownify(email))}</p> </li> <li> <div class="flex text-theme-dark items-center text-xl"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:phone", "class": "mr-3 text-primary" })} <p class="font-semibold">Phone</p> </div> <p class="mt-2 leading-5 pl-8">${unescapeHTML(markdownify(phone))}</p> </li> </ul> </div> <div class="sm:col-7 md:col-8"> <form class="contact-form row gy-2 justify-center" method="POST" action="https://formsubmit.co/dragos@bitdoze.com" data-astro-reload> <div class="lg:col-6"> <label class="mb-2 block" for="name">Name <span class="text-red-600">*</span></label> <input class="form-input w-full" name="name" type="text" required> </div> <div class="lg:col-6"> <label class="mb-2 block" for="email">Email <span class="text-red-600">*</span></label> <input class="form-input w-full" name="email" type="email" required> </div> <div class="col-12"> <label class="mb-2 block" for="subject">Subject</label> <input class="form-input w-full" name="subject" type="text"> </div> <div class="col-12"> <label class="mb-2 block" for="message">Message <span class="text-red-600">*</span></label> <textarea name="message" class="form-textarea w-full" rows="4"></textarea> </div> <div class="col-12"> <button class="btn btn-primary mt-2">Submit Now</button> </div> </form> </div> </div> </div> </section> ` })}`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/contact.astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/contact.astro";
const $$url = "/contact/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
