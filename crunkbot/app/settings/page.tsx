import Link from "next/link";

import { title } from "@/components/primitives";

export default function SettingsPage() {
  return (
    <div>
      <h1 className={title()}>Settings</h1>
      <div style={{ marginTop: 50 }}>
        <Link href="/settings/configuration">Configuration</Link>
      </div>
    </div>
  );
}
