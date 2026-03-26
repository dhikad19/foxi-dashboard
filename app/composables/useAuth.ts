export const useAuth = () => {
  const user = useState("user", () => null);
  const login = async (email: string, password: string) => {
    const res = await $fetch("/api/login", {
      method: "POST",
      body: { email, password },
    });

    if (res.success) {
      user.value = { email };
      await navigateTo("/");
    }
  };

  const logout = () => {
    const auth = useCookie("auth");

    auth.value = null;
    user.value = null;

    return navigateTo("/login");
  };

  return { user, login, logout };
};
