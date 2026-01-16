import connectDB from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search") || "";
  const status = searchParams.get("status");
  const page = Number(searchParams.get("page")) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  let query = {
    $or: [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } }
    ]
  };

  if (status) query.status = status;

  const leads = await Lead.find(query).skip(skip).limit(limit);
  const total = await Lead.countDocuments(query);
  const totalLeads = await Lead.countDocuments();
  const converted = await Lead.countDocuments({ status: "converted" });
  const newLeads = await Lead.countDocuments({ status: "new" });


 return Response.json({
  leads,
  total,
  stats: {
    totalLeads,
    converted,
    newLeads
  }
});

}
