import { db } from "@/lib/server/db";
import { Contact } from "@prisma/client";

// SAVE CONTACT REQUEST
export const POST = async (req: Request): Promise<Response> => {
    try {
      const body: Contact = await req.json();
      const contact = await db.contact.create({
        data: {...body},
      });
  
      return new Response(JSON.stringify(contact), {
        status: 200,
      });
    } catch (err: unknown) {
      console.error(err);
      return new Response(JSON.stringify({ message: "Something went wrong!" }), {
        status: 500,
      });
    }
  };
  

