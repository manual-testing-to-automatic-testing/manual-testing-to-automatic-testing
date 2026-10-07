/**
 * A tiny page for the flaky-test exercise. The status message appears after a
 * random delay of 0 to 1200 ms, the way a real page waits on a slow API.
 */
export const slowStatusPage = `
<!doctype html>
<html lang="en">
  <body>
    <button id="save">Save</button>
    <p id="status" role="status"></p>
    <script>
      document.getElementById('save').addEventListener('click', () => {
        const delay = Math.floor(Math.random() * 1200);
        setTimeout(() => {
          document.getElementById('status').textContent = 'Saved';
        }, delay);
      });
    </script>
  </body>
</html>
`;
