const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '',
});
const openai = new OpenAIApi(configuration);

const response = async () => await openai.createCompletion({
  model: "text-curie-001",
  prompt: "Reword this:\n\nInformation Engineering module. Lectured sessions and study sessions. Covered Python and R programming languages, NoSQL databases, Hadoop/MapReduce, machine learning and data science topics, information retrieval and data mining algorithms, knowledge management. Undertook an analysis of a live real-world data set and documented approach and findings.\n",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

response().then((data) => {
	console.log(data.data.choices[0].text);
});
