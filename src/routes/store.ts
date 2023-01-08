// This js file will later be used for storing variables onto local system storage.
// For instance, the light/dark mode user setting will be stored.

import { writable } from "svelte/store";

export const saved_status = writable(false);
export const download_status = writable(false);

// light/dark mode variables
export const light_mode = writable(true);
export const dark_mode = writable(false);
export const background = writable('black');