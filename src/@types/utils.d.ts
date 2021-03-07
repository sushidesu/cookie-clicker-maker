type OmitChildren<T extends { children?: ReactNode }> = Omit<T, "children">
