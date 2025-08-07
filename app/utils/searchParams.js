export function extractParamsFromSearchParams(searchParams) {
  try {
    const encodedData = searchParams?.get("data");
    if (!encodedData) return null;

    const decoded = decodeURIComponent(encodedData);
    const parsed = JSON.parse(decoded);

    return parsed;
  } catch (err) {
    console.error("Failed to extract and parse URL params:", err);
    return null;
  }
}