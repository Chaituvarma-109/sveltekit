<script lang="ts">
    import { enhance } from '$app/forms'
</script>

<form method="POST" use:enhance>
    <label for="username">
        Username
        <input type="text" name="username" id="username" />
    </label>

    <label for="password">
        Password
        <input type="password" name="password" id="password" />
    </label>

    <label for="remember">
        <input type="checkbox" name="&remember" id="remember" />
        Remember me
    </label>

    <button type="submit">Log in</button>
</form>  
