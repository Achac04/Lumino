"use client";

import * as React from "react";
import { Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function RestorationForm() {
  const [files, setFiles] = React.useState<FileList | null>(null);

  return (
    <form
      className="col-span-12 mt-12 max-w-3xl space-y-10"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telephone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="origin">Lamp age / origin</Label>
          <Input
            id="origin"
            name="origin"
            placeholder="e.g., 1930s France — acquired from family estate"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="issue">Issue description</Label>
          <Textarea
            id="issue"
            name="issue"
            placeholder="Describe flickering, missing finials, cracked glass, rewiring needs, or conservation goals."
          />
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal-muted">
          Photographs for assessment
        </p>
        <label
          htmlFor="photos"
          className="flex cursor-pointer flex-col items-center justify-center rounded-sm border border-dashed border-charcoal/25 bg-parchment-muted/20 px-6 py-14 text-center transition-colors hover:border-brass hover:bg-parchment-muted/40"
        >
          <Upload className="h-6 w-6 text-brass-dark" aria-hidden />
          <span className="mt-3 font-serif text-lg text-charcoal">
            Upload images
          </span>
          <span className="mt-2 max-w-sm font-sans text-xs leading-relaxed text-charcoal-muted">
            Drag files here or click to browse. Include overall shots, maker
            marks, and any damage in raking light.
          </span>
          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={(e) => setFiles(e.target.files)}
          />
        </label>
        {files && files.length > 0 ? (
          <p className="font-sans text-xs text-charcoal-muted">
            {files.length} file{files.length > 1 ? "s" : ""} selected (preview
            only in this prototype).
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-4">
        <Button type="submit" variant="brass" size="lg">
          Submit inquiry
        </Button>
        <Button type="reset" variant="ghost">
          Clear form
        </Button>
      </div>
    </form>
  );
}
