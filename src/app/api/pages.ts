import { ResultDataType } from "@/model/survey";
import { supabase } from "@/util/supabase";

export async function getResultPage(id: string) {
  const { data, error } = await supabase
    .from("pages")
    .select(`*`)
    .eq("id", id)
    .single();

  return { data, error };
}

export async function addResultPage(params: ResultDataType) {
  const { data, error } = await supabase
    .from("pages")
    .insert(params)
    .select(`id`);

  if (error) {
    return { data: null, error };
  }

  const id = data[0].id;

  return id;
}
