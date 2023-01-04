<script>
	import { saved_status } from '../store.js';
	let user = { loggedIn: false };
	let status = '';

	saved_status.subscribe(value => {
		user.loggedIn = value;
	});

	function toggle() {
		user.loggedIn = !user.loggedIn;
		saved_status.set(user.loggedIn);
	}
	
	$: {
		if (user.loggedIn)
			status = 'logged in';
		else
		  	status = 'logged out';
	}
</script>

{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{/if}

{#if !user.loggedIn}
	<button on:click={toggle}>
		Log in
	</button>
{/if}

<p>
	Your are currently {status}.
</p>