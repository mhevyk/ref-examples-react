export type Item = {
  id: number;
};

export default function getItemsByPage(page: number, limit = 10) {
  const startIndex = (page - 1) * limit + 1;
  const endIndex = page * limit;

  const data: Item[] = [];

  for (let i = startIndex; i <= endIndex; i++) {
    data.push({ id: i });
  }

  return data;
}
