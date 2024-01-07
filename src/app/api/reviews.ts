import { ReviewDataType } from "@/model/survey";
import { supabase } from "@/util/supabase";

export async function addReview(params: ReviewDataType) {
  const { data, error } = await supabase
    .from("reviews")
    .insert(params)
    .select(`id`);

  if (error) {
    return { data: null, error };
  }

  const id = data[0].id;

  return id;
}
