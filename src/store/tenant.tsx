import { create } from "zustand";
import { fetchUsersTenants } from "@/features/store/server/get-users-tenats";

// Define your interface
interface TenantState {
  tenant: string | null; // Allow tenant to be null initially
  changeTenant: (to: string) => void;
  loadFirstTenant: (userId: string) => Promise<void>;
}

// Create the Zustand store
export const useTenantStore = create<TenantState>()((set) => ({
  tenant: null, // Initialize with null

  // Method to change tenant
  changeTenant: (to) => set(() => ({ tenant: to })),

  // Method to load the first tenant
  loadFirstTenant: async (userId: string) => {
    if (!userId) return;

    // Fetch tenants for the user from the backend
    const tenants = await fetchUsersTenants(userId);

    // Set the first tenant if tenants exist, otherwise set tenant to null
    if (tenants.length > 0) {
      set(() => ({ tenant: tenants[0].name })); // Set the first tenant's name
    } else {
      set(() => ({ tenant: null })); // Set tenant to null if none found
    }
  },
}));
