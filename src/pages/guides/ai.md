---
title: Artificial Intelligence
description: A guide for open source AI services
---

## What is artificial intelligence?

Artificial intelligence leverages computers and machines to mimic the problem-solving and decision-making capabilities of the human mind. AI combines computer science and robust datasets to enable problem-solving. AI developers take the models that data scientists create and make them into deployable models that can be used in applications.

The diagram below shows how machine learning and deep learning fits into the realm of AI.

![AI-ML-DL](./images/AI-ML-DL.png)

## Why is this important for hybrid cloud developers?

Integrating AI and machine learning technologies with cloud environments is an increasingly common scenario, driven by use of microservices and the need to scale rapidly. Developers are faced with the challenge to not only build machine learning applications, but to ensure that they run well in production in cloud-native and hybrid cloud environments.

## Solution sketch

When developing AI-powered services and applications that run in cloud environments, there is a vast array of development areas to consider including:

* Data selection
* Data preprocessing
* Data visualization
* Model development
* Model deployment

## Limitations

* **Overfitting**: Overfitting is a concept in data science which occurs when a statistical model fits exactly against its training data. When this happens, the algorithm unfortunately cannot perform accurately against the unseen data, defeating its purpose.

* **Underfitting**: Underfitting is a concept in data science which occurs when a statistical model is not complex enough to fit against its training data. When this happens, the algorithm cannot perform accurately against the training nor the unseen data, defeating its purpose.

## Key open source projects

### Open datasets

<InlineNotification kind="info">

**Note:** For more information about open source licenses, refer to ["Licenses and Standards"](https://opensource.org/licenses).

</InlineNotification>

| Source | APIs | Description |
| - | - | - |
| [Project CodeNet](https://ml-exchange.org/datasets/codenet-langclass) | N/A | Large-scale dataset with approximately 14 million code samples, each of which is an intended solution to one of 4000 coding problems |
| [UC Irvine Machine Learning Repository](https://archive.ics.uci.edu/ml/) | N/A | Collection of databases, domain theories, and data generators that are used by the machine learning community for the empirical analysis of machine learning algorithms. |
| [Kaggle datasets](https://www.kaggle.com/datasets) | N/A | Over 50,000 public datasets and 400,000 public notebooks |
| [Registry of Open Data on AWS](https://registry.opendata.aws/) | N/A | Discover and share datasets that are available via AWS resources. |
| [Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets) | N/A | A high quality list of topic-centric public data sources |
| [World Bank Open Data](https://data.worldbank.org/) | [World Bank Data Open API](https://datahelpdesk.worldbank.org/knowledgebase/topics/125589) | Free and open access to global development data |
| [WHO Open Data](https://www.who.int/data/gho/) | [GHO OData API](https://www.who.int/data/gho/info/gho-odata-api) | World Health Organization's gateway to health-related statistics for its 194 Member States |
| [Google Public Data Explorer](https://www.google.com/publicdata/directory) | N/A | Large datasets that are easy to explore, visualize and communicate |
| [U.S.Census Bureau](http://www.census.gov/data.html) | [Microdata API](https://www.census.gov/data/developers/data-sets/census-microdata-api.html) | The leading source of quality data about the United States' people and economy |
| [Data.gov](https://www.data.gov/) | [Data.gov CKAN API](https://www.data.gov/developers/apis) | Data, tools, and resources to conduct research, develop web and mobile applications, design data visualizations, and more |
| [Yelp Open Dataset](https://www.yelp.com/dataset) | N/A | Subset of Yelp's businesses, reviews, and user data for use in personal, educational, and academic purposes |
| [UNICEF](https://data.unicef.org/) | N/A | World’s leading source of data on children with databases of hundreds of international valid and comparable indicators |

### Data preprocessing - Wrangling, Cleaning, Analyzing, Computing

| Name | Description | GitHub repo | Get Started guide |
| - | - | - | - |
| [Pandas](https://pandas.pydata.org/) | A fast, powerful, flexible and easy to use open source data analysis and manipulation tool built on Pythong | [Source](https://github.com/pandas-dev/pandas/) | [Guide](https://pandas.pydata.org/docs/) |
| [scikit learn - preprocessing](https://scikit-learn.org/stable/modules/preprocessing.html) | The sklearn.preprocessing package provides several common utility functions and transformer classes to change raw feature vectors into a representation that is more suitable for the downstream estimators. | [Source](https://github.com/scikit-learn/scikit-learn) | [Guide](https://scikit-learn.org/stable/modules/preprocessing.html) |
| [NumPy](https://numpy.org/) | An open source project that enables numerical computing with Python | [Source](https://github.com/numpy) | [Guide](https://numpy.org/doc/stable/) |
| [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) | A Python library designed for quick turnaround projects like screen-scraping | [Source](https://code.launchpad.net/beautifulsoup) | [Guide](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) |

### Data visualization

| Name | Description | GitHub Repo | Get Started guide |
| - | - | - | - |
| [Matplotlib](https://matplotlib.org/) | Comprehensive library for creating static, animated, and interactive visualizations in Python | [Source](https://github.com/matplotlib/matplotlib/) |[Guide](https://matplotlib.org/stable/contents.html) |
| [Seaborn](https://seaborn.pydata.org/) | High-level interface for drawing attractive and informative statistical graphics | [Source](https://github.com/seaborn) | [Guide](https://seaborn.pydata.org/tutorial.html) |
| [Plotly](https://plotly.com/python/) | A Python graphing library that makes interactive, publication-quality graphs | [Source](https://github.com/plotly/plotly.py) | [Guide](https://plotly.com/python/getting-started/) |
| [Bokeh](http://docs.bokeh.org/en/latest/) | Python library for creating interactive visualizations for modern web browsers | [Source](https://github.com/bokeh/bokeh) | [Guide](http://docs.bokeh.org/en/latest/docs/user_guide.html)

### Model development

| Name | Description | GitHub Repo | Get Started guide |
| - | - | - | - |
| [Scikit-Learn](https://scikit-learn.org/stable/) | Simple and efficient tools for predictive data analysis | [Source](https://github.com/scikit-learn/scikit-learn) | [Guide](https://scikit-learn.org/stable/getting_started.html)|
| [XGBoost](https://xgboost.ai) | Otimized distributed gradient boosting library designed to be highly efficient, flexible and portable. | [Source](https://github.com/dmlc/xgboost) | [Guide](https://xgboost.readthedocs.io/en/latest/)|
| [Tensorflow](https://www.tensorflow.org/) | The core open source library to help you develop and train ML models | [Source](https://github.com/tensorflow/tensorflow) | [TensorFlow Get Started](https://www.tensorflow.org/learn) |
| [Keras](https://keras.io/) | A deep learning API written in Python, that enables fast experimentation | [Source](https://github.com/keras-team/keras) | [Keras Get Started](https://keras.io/getting_started) |
| [PyTorch](https://pytorch.org/) | A machine learning framework that accelerates the path from research prototyping to production deployment | [Source](https://github.com/pytorch/pytorch) | [PyTorch Get Started](https://pytorch.org/get-started/locally/) |
| [PySpark](https://spark.apache.org/) | PySpark is an interface for Apache Spark in Python.PySpark supports a machine learning library known as MLlib that is used for model training. | [Source](https://github.com/apache/spark) | [Guide](http://spark.apache.org/docs/latest/api/python/#) |
| [NLTK](https://www.nltk.org/) | A platform for building Python programs to work with human language data | [Source](https://github.com/nltk/nltk) | [Guide](https://www.nltk.org/api/nltk.html) |
| [Gensim](https://radimrehurek.com/gensim/) | Python library for process raw, unstructured digital texts | [Source](https://github.com/RaRe-Technologies/gensim) | [Guide](https://radimrehurek.com/gensim/auto_examples/index.html#documentation) |
| [Statsmodels](https://www.statsmodels.org/stable/index.html) | Python module that provides classes and functions for the estimation of many different statistical models | [Source](https://github.com/statsmodels/statsmodels) | [Guide](https://www.statsmodels.org/stable/gettingstarted.html) |

### Model deployment

| Name | Description | GitHub Repo | Get Started guide |
| - | - | - | - |
| [Kubeflow](https://www.kubeflow.org) | The Kubeflow project is dedicated to making deployments of machine learning (ML) workflows on Kubernetes simple, portable and scalable.  | [Source](https://github.com/kubeflow/) | [Guide](https://www.kubeflow.org/docs/)|
| [TensorFlow Extended](https://www.tensorflow.org) | TensorFlow Extended is an end-to-end platform for preparing data, training, validating, and deploying models in large production environments.| [Source](https://github.com/tensorflow/tfx) | [Guide](https://www.tensorflow.org/tfx/guide)|
| [MLflow](https://mlflow.org) | MLflow is an open source platform to manage the ML lifecycle, including experimentation, reproducibility, deployment, and a central model registry. | [Source](https://github.com/mlflow/mlflow/) | [Guide](https://mlflow.org/docs/latest/index.html)|


## Cloud comparision

|  | IBM Cloud | GCP | AWS | Azure |
| - | - | - | - | - |
| SaaS Platforms | [Cloud Pak for Data](https://dataplatform.cloud.ibm.com/) | [Vertex AI](https://cloud.google.com/vertex-ai) | [SageMaker](https://aws.amazon.com/sagemaker/) | [Azure ML](https://azure.microsoft.com/en-ca/services/machine-learning/) |

## Additional resources

### Blogs

* [What is AI? | IBM Cloud Learn Hub](https://www.ibm.com/cloud/learn/what-is-artificial-intelligence)
* [Build robust machine learning-based solutions](https://developer.ibm.com/articles/what-is-machine-learning/)

### Courses

* [AI For Everyone | Coursera](https://www.coursera.org/learn/ai-for-everyone)
* [Deep Learning Specialization | Coursera](https://www.coursera.org/specializations/deep-learning)
* [Maching Learning with Python | Coursera](https://www.coursera.org/learn/machine-learning-with-python)
* [Machin Learning for Coders | Fast.ai](https://course18.fast.ai/ml)
