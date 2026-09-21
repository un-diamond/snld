"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

const emptyProduct: Product = {
  sku: "",
  name: "",
  categoryId: "rings",
  shortDescription: "",
  description: "",
  images: [],
  specs: [],
  availability: "inquiry",
  featured: true,
  status: "published",
};

type AdminState = "login" | "loading" | "ready";

export default function AdminPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState<AdminState>("login");

  const [items, setItems] = useState<Product[]>([]);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function login() {
    if (!user.trim() || !password) {
      setMessage("Please enter your username and password.");
      return;
    }

    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          password,
        }),
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setState("login");
        setMessage(
          data.error || "Invalid username or password.",
        );
        return;
      }

      setState("ready");

      try {
        const productsResponse = await fetch(
          "/api/admin/products",
          {
            method: "GET",
            headers: {
              "x-admin-user": user,
              "x-admin-password": password,
            },
            cache: "no-store",
          },
        );

        if (productsResponse.ok) {
          const productsData =
            await productsResponse.json();

          if (Array.isArray(productsData.products)) {
            setItems(productsData.products);
          }
        }
      } catch {
        setItems([]);
      }
    } catch {
      setState("login");
      setMessage("Unable to connect to the server.");
    }
  }

  function updateItem(
    index: number,
    changes: Partial<Product>,
  ) {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              ...changes,
            }
          : item,
      ),
    );
  }

  async function upload(
    index: number,
    file: File,
  ) {
    setBusy(true);
    setMessage("");

    /*
     * Show the selected image immediately.
     * This gives the admin an instant preview
     * before the upload request finishes.
     */
    const previewUrl = URL.createObjectURL(file);

    updateItem(index, {
      images: [previewUrl],
    });

    try {
      const form = new FormData();
      form.append("file", file);

      const response = await fetch(
        "/api/admin/upload",
        {
          method: "POST",
          headers: {
            "x-admin-user": user,
            "x-admin-password": password,
          },
          body: form,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(
          data.error || "Image upload failed.",
        );
        return;
      }

      /*
       * Replace the temporary browser preview
       * with the permanent uploaded image URL.
       */
      if (data.url) {
        updateItem(index, {
          images: [data.url],
        });
      }

      setMessage("Image uploaded successfully.");
    } catch {
      setMessage(
        "Image preview is shown, but the upload failed. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  async function save() {
    setBusy(true);
    setMessage("");

    try {
      const response = await fetch(
        "/api/admin/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-admin-user": user,
            "x-admin-password": password,
          },
          body: JSON.stringify({
            products: items,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(
          data.error ||
            "Failed to save products.",
        );
        return;
      }

      if (Array.isArray(data.products)) {
        setItems(data.products);
      }

      setMessage(
        "Products saved successfully.",
      );
    } catch {
      setMessage(
        "Failed to save products.",
      );
    } finally {
      setBusy(false);
    }
  }

  function addItem() {
    const sku = `SNLD-${Date.now()}`;

    setItems((prev) => [
      ...prev,
      {
        ...emptyProduct,
        sku,
        name: "New Diamond Piece",
      },
    ]);

    setMessage(
      "New product added. Fill in the details and save.",
    );
  }

  function removeItem(index: number) {
    const item = items[index];

    if (!item) {
      return;
    }

    const confirmed = window.confirm(
      `Delete "${item.name}"?\n\nThis will remove the product from the collection after you save.`,
    );

    if (!confirmed) {
      return;
    }

    setItems((prev) =>
      prev.filter((_, i) => i !== index),
    );

    setMessage(
      "Product removed from the list. Click Save to confirm.",
    );
  }

  function logout() {
    setUser("");
    setPassword("");
    setItems([]);
    setMessage("");
    setState("login");
  }

  if (
    state === "login" ||
    state === "loading"
  ) {
    return (
      <main className="mx-auto max-w-md px-5 py-20 text-[var(--color-diamond)]">
        <div className="border border-[var(--color-hairline)] p-8">
          <p className="text-xs tracking-[0.25em] text-[var(--color-rose)]">
            S NISANOV LUX DIAMOND
          </p>

          <h1 className="mt-4 font-serif text-4xl">
            Admin Login
          </h1>

          <p className="mt-3 text-sm text-[var(--color-muted)]">
            Sign in to manage the jewellery collection.
          </p>

          <label className="mt-8 block text-xs tracking-[0.2em] uppercase">
            Username
          </label>

          <input
            value={user}
            onChange={(event) =>
              setUser(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                void login();
              }
            }}
            className="mt-2 w-full border border-[var(--color-hairline)] bg-transparent px-3 py-3 outline-none"
            autoComplete="username"
            disabled={state === "loading"}
          />

          <label className="mt-5 block text-xs tracking-[0.2em] uppercase">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                void login();
              }
            }}
            className="mt-2 w-full border border-[var(--color-hairline)] bg-transparent px-3 py-3 outline-none"
            autoComplete="current-password"
            disabled={state === "loading"}
          />

          <button
            type="button"
            onClick={() => void login()}
            disabled={state === "loading"}
            className="btn-primary mt-6 w-full"
          >
            {state === "loading"
              ? "SIGNING IN..."
              : "LOGIN"}
          </button>

          {message ? (
            <p className="mt-4 text-sm text-[var(--color-rose)]">
              {message}
            </p>
          ) : null}
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-16 text-[var(--color-diamond)]">
      <div className="flex flex-col gap-5 border-b border-[var(--color-hairline)] pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs tracking-[0.25em] text-[var(--color-rose)]">
            S NISANOV LUX DIAMOND
          </p>

          <h1 className="mt-3 font-serif text-4xl">
            Collection Admin
          </h1>

          <p className="mt-3 max-w-xl text-sm text-[var(--color-muted)]">
            Add, edit, replace images, or remove jewellery
            pieces from the collection.
          </p>
        </div>

        <button
          type="button"
          onClick={logout}
          className="btn-ghost"
        >
          LOG OUT
        </button>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={addItem}
          className="btn-ghost"
        >
          + ADD PRODUCT
        </button>

        <button
          type="button"
          onClick={() => void save()}
          disabled={busy}
          className="btn-primary"
        >
          {busy ? "SAVING..." : "SAVE CHANGES"}
        </button>
      </div>

      {message ? (
        <p className="mt-4 text-sm text-[var(--color-rose)]">
          {message}
        </p>
      ) : null}

      <div className="mt-10 space-y-8">
        {items.length === 0 ? (
          <div className="border border-[var(--color-hairline)] p-8">
            <p className="font-serif text-2xl">
              No products yet.
            </p>

            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Click “Add Product” to create the first piece.
            </p>
          </div>
        ) : (
          items.map((item, index) => (
            <section
              key={item.sku}
              className="border border-[var(--color-hairline)] p-5 sm:p-7"
            >
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="lg:w-64 lg:shrink-0">
                  {item.images[0] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="aspect-square w-full object-cover"
                    />
                  ) : (
                    <div className="flex aspect-square items-center justify-center border border-[var(--color-hairline)] text-xs text-[var(--color-muted)]">
                      NO IMAGE
                    </div>
                  )}

                  <label className="mt-4 block cursor-pointer border border-[var(--color-hairline)] px-4 py-3 text-center text-xs tracking-[0.15em]">
                    CHANGE IMAGE

                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/avif"
                      className="hidden"
                      onChange={(event) => {
                        const file =
                          event.target.files?.[0];

                        if (file) {
                          void upload(
                            index,
                            file,
                          );
                        }

                        event.currentTarget.value =
                          "";
                      }}
                    />
                  </label>
                </div>

                <div className="flex-1">
                  <label className="block text-xs tracking-[0.2em] uppercase">
                    Product Name
                  </label>

                  <input
                    value={item.name}
                    onChange={(event) =>
                      updateItem(index, {
                        name: event.target.value,
                      })
                    }
                    className="mt-2 w-full border-b border-[var(--color-hairline)] bg-transparent px-0 py-3 font-serif text-2xl outline-none"
                  />

                  <label className="mt-6 block text-xs tracking-[0.2em] uppercase">
                    Category
                  </label>

                  <select
                    value={item.categoryId}
                    onChange={(event) =>
                      updateItem(index, {
                        categoryId:
                          event.target.value,
                      })
                    }
                    className="mt-2 w-full border border-[var(--color-hairline)] bg-[var(--color-ink)] px-3 py-3"
                  >
                    <option value="rings">
                      Rings
                    </option>
                    <option value="necklaces">
                      Necklaces
                    </option>
                    <option value="earrings">
                      Earrings
                    </option>
                    <option value="bracelets">
                      Bracelets
                    </option>
                  </select>

                  <label className="mt-6 block text-xs tracking-[0.2em] uppercase">
                    Description
                  </label>

                  <textarea
                    value={item.description}
                    onChange={(event) =>
                      updateItem(index, {
                        description:
                          event.target.value,
                        shortDescription:
                          event.target.value,
                      })
                    }
                    className="mt-2 h-32 w-full border border-[var(--color-hairline)] bg-transparent p-3 text-sm outline-none"
                  />

                  <div className="mt-5 flex flex-wrap items-center gap-5">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={item.featured}
                        onChange={(event) =>
                          updateItem(index, {
                            featured:
                              event.target.checked,
                          })
                        }
                      />
                      Featured
                    </label>

                    <select
                      value={item.status}
                      onChange={(event) =>
                        updateItem(index, {
                          status:
                            event.target
                              .value as Product["status"],
                        })
                      }
                      className="border border-[var(--color-hairline)] bg-[var(--color-ink)] px-3 py-2 text-sm"
                    >
                      <option value="published">
                        Published
                      </option>
                      <option value="draft">
                        Draft
                      </option>
                    </select>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-xs text-[var(--color-muted)]">
                      SKU: {item.sku}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        removeItem(index)
                      }
                      className="text-xs tracking-[0.15em] text-[var(--color-rose)]"
                    >
                      DELETE PRODUCT
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))
        )}
      </div>

      <div className="mt-10 border-t border-[var(--color-hairline)] pt-8">
        <button
          type="button"
          onClick={() => void save()}
          disabled={busy}
          className="btn-primary w-full sm:w-auto"
        >
          {busy ? "SAVING..." : "SAVE CHANGES"}
        </button>
      </div>
    </main>
  );
}