interface SoloForDevice {
  icon: string;
  title: string;
  type: string;
}

export const Devices: SoloForDevice[] = [
  {
    icon: 'assets/icons/ios.svg',
    title: 'Solo for iOS',
    type: 'Mobile App',
  },
  {
    icon: 'assets/icons/macos.svg',
    title: 'Solo for Mac',
    type: 'Mobile App',
  },
  {
    icon: 'assets/icons/android.svg',
    title: 'Solo for Android',
    type: 'Mobile App',
  },
  {
    icon: 'assets/icons/desktop.svg',
    title: 'Solo on Web',
    type: 'Desktop App',
  },
  {
    icon: 'assets/icons/windows.svg',
    title: 'Solo for Windows',
    type: 'Desktop App',
  },
];
