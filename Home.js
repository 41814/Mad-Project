import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,ImageBackground } from 'react-native';
import Footer from './Footor';
import Nav from './Nav';

const Home = ({ navigation }) => {
 
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'This library is amazing! A great collection of books and a cozy atmosphere.',
    },
    {
      name: 'Jane Smith',
      feedback: 'I love the digital borrowing feature. Super convenient!',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
     
     <Nav/>
     
      {/* Hero Section */}
      <View style={styles.heroSection}>
    
        <Image
        
          source={{
            uri: 'https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.heroImage}
        />
        
        <View style={styles.overlay} />
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitle}>Welcome to Noble Library</Text>
          <Text style={styles.heroSubtitle}>Explore, Read, and Borrow Your Favorite Books!</Text>
        </View>
        
      </View>
  
      
      {/* Options Section */}
      <View style={styles.optionsSection}>
        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => navigation.navigate('Issue')}
        >
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.optionImage}
          />
          <Text style={styles.optionTitle}>Issue Book</Text>
          <Text style={styles.optionDescription}>
            Manage books, members, and library activities.
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => navigation.navigate('Books')}
        >
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1906437/pexels-photo-1906437.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.optionImage}
          />
          <Text style={styles.optionTitle}>Available Books</Text>
          <Text style={styles.optionDescription}>
            Explore books and borrow your favorites!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => navigation.navigate('BorrowedBooks')}
        >
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1526049/pexels-photo-1526049.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.optionImage}
          />
          <Text style={styles.optionTitle}>Borrowed Books</Text>
          <Text style={styles.optionDescription}>
            Explore books and borrow your favorites!
          </Text>
        </TouchableOpacity>
      </View>

      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.statsSection}
        imageStyle={{ opacity: 0.3 }} // Optional: Adjust transparency
      >
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>10,000+</Text>
          <Text style={styles.statLabel}>Books</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>5,000+</Text>
          <Text style={styles.statLabel}>Members</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>2,000+</Text>
          <Text style={styles.statLabel}>Borrowed Books</Text>
        </View>
      </ImageBackground>

      {/* Testimonials Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What Our Members Say</Text>
        {testimonials.map((testimonial, index) => (
          <View key={index} style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>{testimonial.feedback}</Text>
            <Text style={styles.testimonialAuthor}>- {testimonial.name}</Text>
          </View>
        ))}
      </View>


      <Text style={styles.title}>Resources</Text>
      <Text style={styles.subtitle}>Get started with everything you need</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://library.lums.edu.pk/sites/default/files/2023-01/iport.jpg' }} style={styles.image} />
          <Text style={styles.cardTitle}>Library iPortal</Text>
          <Text style={styles.cardText}>
            The library iPortal provides access to the library catalogue and secure access to patron accounts. Users can carry out many transactions like reissuing books.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('card1')}>Read More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://library.lums.edu.pk/sites/default/files/2023-01/edb.jpg' }} style={styles.image} />
          <Text style={styles.cardTitle}>E-Database</Text>
          <Text style={styles.cardText}>
            The Library's electronic resources are growing at a fast pace. It provides access to a wide range of electronic resources, including e-databases and e-journals.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('card2')}>Read More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://library.lums.edu.pk/sites/default/files/2023-01/libg_0.jpg' }} style={styles.image} />
          <Text style={styles.cardTitle}>Web Discovery</Text>
          <Text style={styles.cardText}>
            EBSCO Discovery Service is an all-inclusive search solution that makes in-depth research easy. The platform offers sophisticated features and functionality.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('card3')}>Read More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://library.lums.edu.pk/sites/default/files/2023-01/int-lib-loan.jpg' }} style={styles.image} />
          <Text style={styles.cardTitle}>Web Discovery</Text>
          <Text style={styles.cardText}>
            EBSCO Discovery Service is an all-inclusive search solution that makes in-depth research easy. The platform offers sophisticated features and functionality.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('card5')}>Read More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://library.lums.edu.pk/sites/default/files/2023-01/nbl.jpg' }} style={styles.image} />
          <Text style={styles.cardTitle}>Web Discovery</Text>
          <Text style={styles.cardText}>
            EBSCO Discovery Service is an all-inclusive search solution that makes in-depth research easy. The platform offers sophisticated features and functionality.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('card6')}>Read More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://library.lums.edu.pk/sites/default/files/2023-01/ref.jpg' }} style={styles.image} />
          <Text style={styles.cardTitle}>Web Discovery</Text>
          <Text style={styles.cardText}>
            EBSCO Discovery Service is an all-inclusive search solution that makes in-depth research easy. The platform offers sophisticated features and functionality.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('card7')}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  
  },
  

  scrollContainer: {
    paddingBottom:50, // Space at the bottom
  },
  heroSection: {
    position: 'relative',
    height: 500, // Adjust height as needed
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 19, // Remove extra spacing
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroTextContainer: {
    position: 'absolute',
    alignItems: 'center',
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

  optionsSection: {
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // Allow wrapping to the next line if needed
  },
  optionCard: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20, // Ensure spacing between cards
  },
  optionImage: {
    width: '100%',
    height: 100,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  optionDescription: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#555',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    height: 260,
    backgroundColor:'rgba(0, 0, 0, 0.8)', // Acts as a fallback if the image fails to load
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
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
  sectionTitle:{
    fontSize:30,
    textAlign:'center',
    fontWeight: 'bold',
  },
  testimonialCard: {
    backgroundColor: '#f9f9f9', // Light gray background for the card
    padding: 20, // More padding for a spacious look
    marginVertical: 15, // Increased vertical margin
    borderRadius: 12, // Slightly larger border radius for rounded corners
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow position
    shadowOpacity: 0.1, // Light shadow opacity
    shadowRadius: 8, // Shadow blur radius
    elevation: 5, // For Android shadow
  },
  
  testimonialText: {

    fontSize: 18, // Larger text for better readability
    lineHeight: 24, // Line height for better spacing between lines
    marginBottom: 15, // More space between text and author
    fontFamily: 'Roboto', // Custom font (if available)
    color: '#333', // Darker text color for contrast
  },
  
  testimonialAuthor: {
    fontSize: 16, // Slightly larger for the author name
    fontStyle: 'italic', 
    color: '#555', // Light gray color for author
    textAlign: 'right', // Align the author text to the right
    fontFamily: 'Roboto', // Custom font for the author
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '30%',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 240,
    marginBottom: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Home;
