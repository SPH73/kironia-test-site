import Airtable from "airtable";

export default defineEventHandler(async () => {
  const { atApiKey } = useRuntimeConfig().private;
  const { atBaseId } = useRuntimeConfig().public;
  const base = new Airtable({ apiKey: atApiKey }).base(atBaseId);

  const table = base("masterClasses");

  const records = await table.select().firstPage();
  if (!records) {
    throw Error("Unable to fetch content");
  }
  // console.log('airtable master classes', records)

  return records;
});