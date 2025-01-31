```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let interval;
    if (mounted) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      setMounted(false);
    };
  }, [mounted]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setMounted(false)}>Unmount</button>
    </div>
  );
}
```