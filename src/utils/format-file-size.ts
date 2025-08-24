export function formatFileSize(kilobytes: number): string {
  const ONE_MB_IN_KB = 1024

  if (kilobytes < ONE_MB_IN_KB) {
    return `${kilobytes} KB`
  }

  const megabytes = kilobytes / ONE_MB_IN_KB
  return `${megabytes.toFixed(2)} MB`
}
