<script lang="ts">
  import { Modal, Loader, Notification } from "@svelteuidev/core";
  import { Check } from "lucide-svelte";
  export let open = false;
  export let closeModal = () => {};
  let name = "",
    email = "",
    message = "",
    success = "",
    loading = false,
    error = "";

  const submitEmail = async (payload: any) => {
    try {
      loading = true;
      let url = `https://formsubmit.co/ajax/vinnykipx@gmail.com`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const body = await response.json();
      loading = false;
      if ("success" in body) return body;
    } catch (error) {
      loading = false;
      return null;
    }
  };

  const handleSubmit = async () => {
    if (name.trim().length <= 0) {
      error = "Name is required";
      return false;
    } else if (email.trim().length <= 0) {
      error = "Email is required";
      return false;
    } else if (message.trim().length <= 0) {
      error = "Enter message";
      return false;
    }
    error = "";
    let response = await submitEmail({ name, email, message });
    if (response) {
      success = "Message submitted successfully";
      setTimeout(() => {
        success = "";
        closeModal();
      }, 4000);
    }
  };

  const handleClose = () => {
    closeModal();
  };
</script>

<Modal
  class="p-4 md:p-8 "
  opened={open}
  title={""}
  size="md"
  on:close={handleClose}
>
  <form on:submit|preventDefault={handleSubmit}>
    <p class=" mb-3 text-center py-2 text-xl font-medium">
      Contact Agroecology Kenya
    </p>
    <div class="flex flex-col gap-1 mb-3 rounded-sm">
      <label for="name">Enter name:</label>
      <input
        type="text"
        class="border py-2 px-2 rounded-md"
        bind:value={name}
        id="name"
      />
    </div>
    <div class="flex flex-col gap-1 mb-3 rounded-sm">
      <label for="email">Email:</label>
      <input
        type="text"
        class="border py-2 px-2 rounded-md"
        bind:value={email}
        id="email"
      />
    </div>
    <div class="flex flex-col gap-2 mb-3 rounded-sm">
      <label for="message" class="inline-block">Enter Message:</label>
      <textarea
        id="message"
        rows={3}
        cols={40}
        class="border border-gray-400 rounded-md p-2 outline-none active:outline-none"
        bind:value={message}
      ></textarea>
    </div>
    {#if error.length > 0}
      <p class="text-red-500 py-2 text-sm">{error}</p>
    {/if}
    {#if !loading}
      <Loader variant="dots" class="w-full py-2" size={60} />
    {/if}

    <button
      disabled={loading}
      type="submit"
      class="p-2 bg-green-600 text-white w-full rounded-lg"
      >{loading ? "Submitting" : "Submit"}
    </button>

    {#if success}
      <Notification
        title="Success"
        icon={Check}
        color="teal"
        withCloseButton={false}
      >
        Message submitted successfully!
      </Notification>
    {/if}
  </form>
</Modal>
