import { useState } from "react";
import { Box, Button, Heading, Input, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [apiKey, setApiKey] = useState("");
  const [profileUrls, setProfileUrls] = useState("");
  const [status, setStatus] = useState("");

  const handleScrape = async () => {
    setStatus("Scraping data, please wait...");

    // TODO: Implement actual API calls to scrape data
    // For demo, wait 2 seconds and set dummy data
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const scrapedData = "Name: John\nEmail: john@example.com\nLocation: New York";

    // TODO: Implement sending data to Telegram group chat
    // For demo, just display data on page
    setStatus(`Data scraped and sent to Telegram:\n\n${scrapedData}`);
  };

  return (
    <Box maxW="500px" mx="auto" mt={8}>
      <Heading mb={8}>Profile Data Scraper</Heading>

      <VStack spacing={4} align="stretch">
        <Input value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="Enter API key" />
        <Input value={profileUrls} onChange={(e) => setProfileUrls(e.target.value)} placeholder="Enter profile URLs (comma separated)" />
        <Button colorScheme="blue" onClick={handleScrape}>
          Scrape and Send Data
        </Button>

        {status && <Text whiteSpace="pre-wrap">{status}</Text>}
      </VStack>
    </Box>
  );
};

export default Index;
