export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.email === "admin@mail.com" && body.password === "123") {
    setCookie(event, "auth", "true");

    return { success: true };
  }

  return { success: false };
});
