import React from 'react';
// import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Footer from '../Footor';
import Nav from '../Nav';

const AboutUs = () => {
  const cards = [
    {
      title: 'Library iPortal',
      image: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
        'The library iPortal provides access to the library catalogue and secure access to patron accounts. Users can carry out many transactions like reissuing books.',
    },
    {
      title: 'E-Database',
      image: 'https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "The Library's electronic resources are growing at a fast pace. It provides access to a wide range of electronic resources, including e-databases and e-journals.",
    },
    {
      title: 'Web Discovery',
      image: 'https://images.pexels.com/photos/1565245/pexels-photo-1565245.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        'EBSCO Discovery Service is an all-inclusive search solution that makes in-depth research easy. The platform offers sophisticated features and functionality.',
    },
    {
      title: 'Inter-Library Loan',
      image: 'https://images.pexels.com/photos/2793466/pexels-photo-2793466.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        'The Inter-Library Loan service enables users to access materials from other libraries to fulfill their academic and research needs.',
    },
    {
      title: 'NBL Services',
      image: 'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        'The National Bibliographic Library provides resources for comprehensive research on various topics in collaboration with other libraries.',
    },
    {
      title: 'Reference Services',
      image: 'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        'Reference Services assist users with queries and help them find reliable academic and research information sources.',
    },
  ];
  return (
    
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
     <Nav/>
      
      <View style={styles.heroSection}>

        <Image
          source={{
            uri: 'https://images.pexels.com/photos/3995842/pexels-photo-3995842.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.heroImage}
        />
        <View style={styles.overlay} />
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitle}>Welcome to Noble Library</Text>
          <Text style={styles.heroSubtitle}>Explore, Read, and Borrow Your Favorite Books!</Text>
        </View>
      </View>

      {/* First Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.header}>General Collection</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            This is the main collection comprising high-quality selective books related to the LUMS academic programs. The books on computer science, computer engineering, public administration, science & technology, and management sciences are housed on the ground floor of the library while books on philosophy, psychology, religion, sociology, politics, economics, law, language & literature, arts, and history & geography are housed at Khalid Ishaque Wing (library 1st floor).
          </Text>
        </View>
      </View>

      {/* Second Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.header}>Science and Technology</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            This section focuses on books related to advanced science and technology. It includes materials on topics like artificial intelligence, machine learning, robotics, and more.
          </Text>
        </View>
      </View>

      {/* Third Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.header}>Philosophy & Psychology</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Books on philosophy and psychology explore the depths of human thought and behavior, featuring classic works and modern research in these fields.
          </Text>
        </View>
      </View>

      {/* Fourth Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.header}>Law and Politics</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            This section offers books on law, political science, and governance. It covers topics such as international relations, legal theory, and constitutional law.
          </Text>
        </View>
      </View>








      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.statsSection}
        imageStyle={{ opacity: 0.3 }} 
      >

        <View style={styles.statCard}>

          <Image
            source={{
              uri: 'https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.heroImage1}
          />
          <Text style={styles.statNumber}>10,000+</Text>
          <Text style={styles.statLabel}>Books</Text>
        </View>
        <View style={styles.statCard}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.heroImage1}
          />
          <Text style={styles.statNumber}>2,000+</Text>
          <Text style={styles.statLabel}>Borrowed Books</Text>
        </View>
        <View style={styles.statCard}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.heroImage1}
          />
          <Text style={styles.statNumber}>5,000+</Text>
          <Text style={styles.statLabel}>Members</Text>
        </View>
      </ImageBackground>



      <Text style={styles.title}>Resources</Text>
      <Text style={styles.subtitle}>Get started with everything you need</Text>
      <Swiper
      style={styles.wrapper}
      showsPagination={true} 
      autoplay={true}
      autoplayTimeout={3}
    >
      {cards.map((card, index) => (
        <View style={styles.card} key={index}>
          <Image source={{ uri: card.image }} style={styles.image} />
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardText}>{card.description}</Text>
        </View>
      ))}
    </Swiper>

<Footer/>
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  scrollContainer: {
    paddingBottom: 20, 

  },
  sectionContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    marginBottom: 30, 
  },
  headingContainer: {
    flex: 1,
    marginRight: 10, 
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  textContainer: {
    flex: 1, 
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
  
  heroSection: {
    position: 'relative',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    paddingBottom:30,
  },
  heroTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  headerText: {
    backgroundColor: 'gray',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    height: 490,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 10,
    borderRadius: 10,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  statLabel: {
    fontSize: 16,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  heroImage1: {
    height: 200,
    width: 200,
  },

  scrollContainer: {
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexDirection: 'row', 
    padding: 10,
  },
  
  wrapper: {
    paddingTop:5,
    height: 600, 
    paddingBottom: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 550,
    height: 250, 
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
  title: {
    textAlign:'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    textAlign:'center',
    fontSize: 16,
    marginBottom: 20,
  },
  section: {
     marginBottom: 20,
     },
   header: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 10,
   },
    text: { 
      fontSize: 16, 
      lineHeight: 24,
     },

});
