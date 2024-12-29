export const submit = async (
  email: string,
  name: string,
  acres: any,
  locale: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
) => {
  setLoading(true);
  if (email === '') {
    setError('Email is required');
    setLoading(false);
    return;
  }
  if (!email.includes('@') || !email.includes('.')) {
    setError('Invalid email');
    setLoading(false);
    return;
  }
  if (name === '') {
    setError('Name is required');
    setLoading(false);
    return;
  }
  if (acres.length === 0) {
    setError('Please select an area');
    setLoading(false);
    return;
  }
  const formatted_email = email.toLowerCase().trim();
  try {
    const response = await fetch('/api/submit_onboarding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formatted_email,
        name,
        acres,
        locale,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.magic_link;
    } else {
      const data = await response.json();
      if (data.message === 'User already exists') {
        setError('User already exists');
        setLoading(false);
        return;
      }
      console.error('Error:', response.statusText);
      setError(response.statusText);
      setLoading(false);
    }
  } catch (error) {
    console.error('Fetch error:', error);
    setError('A fetch error occurred');
    setLoading(false);
  }
};
