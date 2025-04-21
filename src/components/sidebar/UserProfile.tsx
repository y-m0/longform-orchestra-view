
export function UserProfile() {
  return (
    <div className="mt-2 p-2">
      <div className="flex items-center gap-2 rounded-md border border-sidebar-border bg-sidebar-accent p-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
          <span className="text-sm font-medium">JD</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">John Doe</span>
          <span className="text-xs text-sidebar-foreground/70">Editor-in-Chief</span>
        </div>
      </div>
    </div>
  );
}
