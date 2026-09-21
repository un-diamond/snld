import type { ProductSpec } from "@/data/products";

type SpecTableProps = {
  specs: ProductSpec[];
};

export function SpecTable({ specs }: SpecTableProps) {
  if (specs.length === 0) return null;

  return (
    <table className="w-full border-collapse text-left text-sm">
      <caption className="sr-only">Specifications</caption>
      <tbody>
        {specs.map((spec) => (
          <tr
            key={`${spec.label}-${spec.value}`}
            className="border-b border-[var(--color-hairline)]"
          >
            <th
              scope="row"
              className="py-3 pr-6 font-normal uppercase tracking-[0.16em] text-[11px] text-[var(--color-muted)]"
            >
              {spec.label}
            </th>
            <td className="py-3 text-[var(--color-ivory)]">{spec.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
