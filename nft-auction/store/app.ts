import create from 'zustand';
import { persist } from 'zustand/middleware';

interface AppPersistState {
  kycBool: boolean;
  setKycBool: (kycBool: boolean) => void,
  signerAddress: string;
  setSignerAddress: (signerAddress: string) => void
}

export const useAppPersistStore = create(
  persist<AppPersistState>(
    (set) => ({
      kycBool: false,
      setKycBool: (kycBool) => set(() => ({ kycBool })),
      signerAddress: "",
      setSignerAddress: (signerAddress => set(() => ({ signerAddress })))
    }),
  )
);
