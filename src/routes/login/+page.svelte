<script>
	import '../../app.css';
	import { Popover, Label, Input, Checkbox, Button, Heading } from 'flowbite-svelte';
	import { CheckOutline, CloseOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';

	let email = 'matheusferreira@email.com',
		password = 'senha123';

	async function submit() {
		// await fetch('http://localhost:5000/auth', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	credentials: 'include',
		// 	body: JSON.stringify({
		// 		email,
		// 		password
		// 	})
		// });

		console.log({ email, password });
		goto('/admin');
	}
</script>

<div class="inline-flex h-screen w-screen flex-col items-center justify-center bg-gray-100">
	<header>
		<Heading tag="h1" class="mb-4" customSize="text-1xl font-extrabold  md:text-2xl lg:text-4xl"
			>Start section</Heading
		>
	</header>

	<form
		on:submit|preventDefault={submit}
		class="w-[450px] rounded-md border-[1px] border-solid border-black border-opacity-30 bg-white p-10"
	>
		<div class="mb-6 text-left">
			<Label for="email" class="mb-2">Your email</Label>
			<Input bind:value={email} type="email" id="email" placeholder="name@flowbite.com" required />
		</div>
		<div class="mb-6 text-left">
			<Label for="password" class="mb-2">Your password</Label>
			<Input bind:value={password} type="password" id="password" required />
		</div>
		<Checkbox class="mb-6 w-4/12 cursor-pointer" color="blue">Remember me</Checkbox>
		<Button type="submit" color="blue" class="flex w-6/12 justify-self-end">Submit</Button>
	</form>
	<Popover class="text-sm" triggeredBy="#password" placement="bottom">
		<h3 class="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
		<div class="grid grid-cols-4 gap-2">
			<div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
			<div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
			<div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
			<div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
		</div>
		<p class="py-2">It’s better to have:</p>
		<ul>
			<li class="mb-1 flex items-center">
				<CheckOutline class="me-2 h-4 w-4 text-green-400 dark:text-green-500" />
				Upper &amp; lower case letters
			</li>
			<li class="mb-1 flex items-center">
				<CheckOutline class="me-2 h-4 w-4 text-green-400 dark:text-green-500" />
				A symbol (#$&amp;)
			</li>
			<li class="flex items-center">
				<CloseOutline class="me-2 h-4 w-4 text-gray-300 dark:text-gray-400" />A longer password
				(min. 12 chars.)
			</li>
		</ul>
	</Popover>
</div>
