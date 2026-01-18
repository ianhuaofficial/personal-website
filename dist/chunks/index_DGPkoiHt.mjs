import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderSlot, e as renderTemplate, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, i as renderComponent } from './astro/server_Do5r9fIj.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Sun, Moon, ExternalLink } from 'lucide-react';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import * as devalue from 'devalue';
import '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Personal portfolio showcasing projects, experience, and life moments"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/ian/Documents/Github/personal-website/src/layouts/Layout.astro", void 0);

function Navigation({ activeSection, onSectionChange }) {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || !savedTheme && prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "life", label: "Life" }
  ];
  return /* @__PURE__ */ jsx("nav", { className: "border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-6 md:px-16", children: /* @__PURE__ */ jsxs("div", { className: "flex h-20 items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "text-base font-medium tracking-tight text-foreground", children: "Ian Hua" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-8", children: sections.map((section) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => onSectionChange(section.id),
          className: `
                    relative text-sm font-medium transition-colors pb-1
                    ${activeSection === section.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
                  `,
          children: [
            section.label,
            activeSection === section.id && /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 right-0 h-px bg-foreground" })
          ]
        },
        section.id
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: toggleDarkMode,
          className: "p-2 text-muted-foreground hover:text-foreground transition-colors",
          "aria-label": "Toggle dark mode",
          children: isDark ? /* @__PURE__ */ jsx(Sun, { className: "h-[18px] w-[18px]" }) : /* @__PURE__ */ jsx(Moon, { className: "h-[18px] w-[18px]" })
        }
      )
    ] })
  ] }) }) });
}

function AboutSection({ data }) {
  return /* @__PURE__ */ jsx("div", { className: "animate-in fade-in duration-700 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl space-y-16", children: [
    /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-8 flex-col sm:flex-row", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/avatar.jpeg",
          alt: "avatar",
          className: "h-28 w-28 rounded-full object-cover flex-shrink-0"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-medium tracking-tight text-balance text-foreground leading-[1.1]", children: [
            "Hello, I'm ",
            data.name
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground", children: [
            "📍 ",
            data.location
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-2xl", children: data.subtitle })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "space-y-6 text-base text-foreground/80 leading-relaxed", children: data.paragraphs.map((paragraph, index) => /* @__PURE__ */ jsx("p", { children: paragraph }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "pt-8 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-x-8 gap-y-4", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: data.socialLinks.github,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group",
          children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "h-[18px] w-[18px] group-hover:scale-110 transition-transform",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-label": "GitHub",
                children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "GitHub" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: data.socialLinks.linkedin,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group",
          children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "h-[18px] w-[18px] group-hover:scale-110 transition-transform",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-label": "LinkedIn",
                children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "LinkedIn" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: data.socialLinks.x,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group",
          children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "h-[18px] w-[18px] group-hover:scale-110 transition-transform",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-label": "X.com",
                children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "X" })
          ]
        }
      )
    ] }) })
  ] }) });
}

function ProjectsSection({ data }) {
  return /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in duration-700 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4", children: data.title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: data.subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-8 sm:grid-cols-2", children: data.projects.map((project, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "group relative bg-card border border-border/50 rounded-xl p-8 hover:border-border transition-all duration-300",
        children: /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium text-foreground group-hover:text-accent transition-colors", children: project.title }),
            project.link && /* @__PURE__ */ jsx(
              "a",
              {
                href: project.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-muted-foreground hover:text-foreground transition-colors flex-shrink-0",
                children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-5 w-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: project.description }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-2", children: project.tags.map((tag, tagIndex) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-foreground/70 border border-border/30",
              children: tag
            },
            tagIndex
          )) })
        ] })
      },
      index
    )) })
  ] });
}

function LifeSection({ data }) {
  return /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in duration-700 mx-auto max-w-3xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4", children: data.title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: data.subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-12", children: data.hobbies.map((hobby, index) => /* @__PURE__ */ jsxs("div", { className: "group space-y-4 pb-12 border-b border-border/30 last:border-0 last:pb-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-medium text-foreground group-hover:text-accent transition-colors", children: hobby.title }),
      /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: hobby.description })
    ] }, index)) })
  ] });
}

function HomePage({ aboutData, projectsData, lifeData }) {
  const [activeSection, setActiveSection] = useState("about");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Navigation, { activeSection, onSectionChange: setActiveSection }),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-6xl px-6 py-20 md:px-16 md:py-32", children: [
      activeSection === "about" && /* @__PURE__ */ jsx(AboutSection, { data: aboutData }),
      activeSection === "projects" && /* @__PURE__ */ jsx(ProjectsSection, { data: projectsData }),
      activeSection === "life" && /* @__PURE__ */ jsx(LifeSection, { data: lifeData })
    ] })
  ] });
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BxsxtVqH.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_3IUBzegT.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const aboutEntries = await getCollection("about");
  const projectsEntries = await getCollection("projects");
  const lifeEntries = await getCollection("life");
  const aboutData = aboutEntries[0]?.data;
  const projectsData = projectsEntries[0]?.data;
  const lifeData = lifeEntries[0]?.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": aboutData ? `${aboutData.name} - Portfolio` : "Portfolio" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HomePage", HomePage, { "client:load": true, "aboutData": aboutData, "projectsData": projectsData, "lifeData": lifeData, "client:component-hydration": "load", "client:component-path": "/Users/ian/Documents/Github/personal-website/src/components/HomePage", "client:component-export": "default" })} ` })}`;
}, "/Users/ian/Documents/Github/personal-website/src/pages/index.astro", void 0);

const $$file = "/Users/ian/Documents/Github/personal-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { DEFAULT_OUTPUT_FORMAT as D, VALID_SUPPORTED_FORMATS as V, DEFAULT_HASH_PROPS as a, page as p };
