"use client";

import { useRouter } from "next/navigation";
import { goToTarget } from "../../lib/navigate";

interface NavigationOfferData {
  page: string;
  section: string;
  label: string;
  reason: string;
}

export function NavigationOffer({
  navigationOffer,
}: {
  navigationOffer: NavigationOfferData | null;
}) {
  const router = useRouter();

  if (!navigationOffer) return null;

  return (
    <button
      onClick={() =>
        goToTarget({
          page: navigationOffer.page,
          match: navigationOffer.section,
          router,
        })
      }
    >
      Show me on the app
    </button>
  );
}