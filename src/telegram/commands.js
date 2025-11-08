import { listQuestions, addQuestion } from "./handlers/qbank.js";
export async function handleCommand(cmd,_chatId,env){ const parts=String(cmd||"").trim().split(/\s+/); const name=parts[0]; const rest=parts.slice(1).join(" ");
if(name==="/start") return "سلام! من سعیدم. دربارهٔ قطعات و مدارهای الکترونیکی ازم بپرس 🙂";
if(name==="/adminhelp") return "پنل: /dashboard\nPOST /admin/set {key,value}\nPOST /admin/test {task,input,imageUrl?}";
if(name==="/teacher"){ const all=await listQuestions(env); return "👩‍🏫 بانک سؤال: "+((all&&all.length)?all.join(", "):"خالی"); }
if(name==="/addq"){ try{ const q=JSON.parse(rest); await addQuestion(env,q); return "✅ افزوده شد."; }catch{ return '❌ JSON نامعتبر. نمونه: /addq {"id":"q1","level":1,"q":"...","a":"..."}'; } }
return "دستور ناشناخته."; }