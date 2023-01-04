// This js file will later be used for storing variables onto local system storage.
// For instance, the light/dark mode user setting will be stored.

import { writable } from "svelte/store";

export const saved_status = writable(false);
export const download_status = writable(false);