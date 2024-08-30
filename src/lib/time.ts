export const formatDuration = (durationMs: number) => {
  const hours = Math.floor(durationMs / 3600000);
  const minutes = Math.floor((durationMs % 3600000) / 60000);

  return `${hours}h ${minutes}m`;
};

export const formatDate = (date: string) => new Date(date).toLocaleDateString("no-NO", {
  year: "numeric",
  month: "long",
  day: "numeric",
})
