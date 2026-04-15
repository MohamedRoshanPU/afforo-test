import { useEffect, useState, type ReactNode } from "react";

import { useFetch } from "@/hooks/useFetch";
import type { User } from "@/types/user";

type SortDirection = "desc" | "asc" | null;

const usersApiUrl = "https://jsonplaceholder.typicode.com/users";
const controlClassName =
  "h-11 w-full rounded-xl border border-border bg-white px-4 outline-none transition focus:border-[#93c5fd] focus:ring-4 focus:ring-[#dbeafe]";

function getInitialSearchTerm() {
  return new URLSearchParams(window.location.search).get("search") ?? "";
}

function getInitialCity() {
  return new URLSearchParams(window.location.search).get("city") ?? "all";
}

function getInitialSortDirection(): SortDirection {
  const sort = new URLSearchParams(window.location.search).get("sort");

  if (sort === "desc" || sort === "asc") {
    return sort;
  }

  return null;
}

function getNextSortDirection(direction: SortDirection): SortDirection {
  if (direction === null) {
    return "desc";
  }

  if (direction === "desc") {
    return "asc";
  }

  return null;
}

export default function App() {
  const { data, error, loading } = useFetch<User[]>(usersApiUrl);
  const [searchTerm, setSearchTerm] = useState(getInitialSearchTerm);
  const [selectedCity, setSelectedCity] = useState(getInitialCity);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    getInitialSortDirection,
  );

  const users = data ?? [];
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const cities = Array.from(
    new Set(users.map((user) => user.address.city)),
  ).sort((left, right) => left.localeCompare(right));

  useEffect(() => {
    if (
      selectedCity !== "all" &&
      cities.length > 0 &&
      !cities.includes(selectedCity)
    ) {
      setSelectedCity("all");
    }
  }, [cities, selectedCity]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (searchTerm.trim()) {
      params.set("search", searchTerm.trim());
    } else {
      params.delete("search");
    }

    if (selectedCity !== "all") {
      params.set("city", selectedCity);
    } else {
      params.delete("city");
    }

    if (sortDirection) {
      params.set("sort", sortDirection);
    } else {
      params.delete("sort");
    }

    const query = params.toString();
    const nextUrl = query
      ? `${window.location.pathname}?${query}`
      : window.location.pathname;

    window.history.replaceState(null, "", nextUrl);
  }, [searchTerm, selectedCity, sortDirection]);

  const filteredUsers = users
    .filter((user) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        user.name.toLowerCase().includes(normalizedSearch) ||
        user.email.toLowerCase().includes(normalizedSearch);

      const matchesCity =
        selectedCity === "all" || user.address.city === selectedCity;

      return matchesSearch && matchesCity;
    })
    .sort((left, right) => {
      if (!sortDirection) {
        return 0;
      }

      const comparison = left.name.localeCompare(right.name);
      return sortDirection === "asc" ? comparison : -comparison;
    });

  return (
    <main className="min-h-screen px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-3xl border border-white/70 bg-surface shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
          <div className="border-b border-[#e8edf5] px-5 py-5 sm:px-6">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#64748b]">
              User Directory
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              Users Table
            </h1>
            <p className="mt-2 text-sm text-[#64748b]">
              Search by name or email, filter by city, and sort by name from the
              table header.
            </p>
          </div>

          <div className="flex flex-col gap-4 px-5 py-5 sm:px-6 md:flex-row md:items-end md:justify-between">
            <div className="w-full md:max-w-sm">
              <label
                htmlFor="search"
                className="mb-2 block text-sm font-medium text-[#334155]"
              >
                Search
              </label>
              <input
                id="search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by name or email"
                className={controlClassName}
              />
            </div>

            <div className="w-full md:max-w-xs">
              <label
                htmlFor="city"
                className="mb-2 block text-sm font-medium text-[#334155]"
              >
                Filter by city
              </label>
              <select
                id="city"
                value={selectedCity}
                onChange={(event) => setSelectedCity(event.target.value)}
                className={controlClassName}
              >
                <option value="all">All cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <div className="overflow-hidden rounded-[20px] border border-[#e8edf5] bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead className="bg-[#f8fafc]">
                    <tr>
                      <SortableHeader
                        activeDirection={sortDirection}
                        onClick={() =>
                          setSortDirection((current) =>
                            getNextSortDirection(current),
                          )
                        }
                      >
                        Name
                      </SortableHeader>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-[#334155]">
                        Email
                      </th>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-[#334155]">
                        Company
                      </th>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-[#334155]">
                        City
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {loading ? (
                      <TableMessage colSpan={4}>Loading users...</TableMessage>
                    ) : error ? (
                      <TableMessage colSpan={4}>
                        Unable to load users: {error}
                      </TableMessage>
                    ) : filteredUsers.length === 0 ? (
                      <TableMessage colSpan={4}>
                        No users match the current search and filter.
                      </TableMessage>
                    ) : (
                      filteredUsers.map((user) => (
                        <tr key={user.id} className="border-t border-[#eef2f7]">
                          <td className="px-5 py-4 text-sm font-medium text-[#0f172a]">
                            {user.name}
                          </td>
                          <td className="px-5 py-4 text-sm text-[#475569]">
                            {user.email}
                          </td>
                          <td className="px-5 py-4 text-sm text-[#475569]">
                            {user.company.name}
                          </td>
                          <td className="px-5 py-4 text-sm text-[#475569]">
                            {user.address.city}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SortableHeader({
  children,
  activeDirection,
  onClick,
}: {
  children: string;
  activeDirection: SortDirection;
  onClick: () => void;
}) {
  const indicator =
    activeDirection === "desc" ? "↓" : activeDirection === "asc" ? "↑" : "↕";

  return (
    <th className="px-5 py-4 text-left text-sm font-semibold text-[#334155]">
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center gap-2 rounded-md text-inherit transition hover:text-primary"
      >
        <span>{children}</span>
        <span className="text-xs text-[#64748b]">{indicator}</span>
      </button>
    </th>
  );
}

function TableMessage({
  children,
  colSpan,
}: {
  children: ReactNode;
  colSpan: number;
}) {
  return (
    <tr className="border-t border-[#eef2f7]">
      <td
        colSpan={colSpan}
        className="px-5 py-10 text-center text-sm text-[#64748b]"
      >
        {children}
      </td>
    </tr>
  );
}
