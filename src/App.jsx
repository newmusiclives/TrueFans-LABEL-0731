import React, { useState } from 'react';
import { 
  Music, Users, Map, Brain, BarChart, GraduationCap, 
  Megaphone, Building, Search, Bell, Settings, 
  Home, Play, Heart, MessageCircle, Globe,
  TrendingUp, Zap, Calendar, DollarSign, Target, 
  Sparkles, Compass, Mic, MapPin, Bot, Crown,
  FileText, Award, Shield, UserCheck, Star,
  CheckCircle, Clock, ArrowRight, UserPlus,
  Headphones, Camera, Palette, Code, Briefcase,
  Phone, Mail, Share2, Database, ChevronDown,
  ChevronUp, Filter, Eye, ExternalLink, Gift,
  CreditCard, Percent, Timer, Trophy, Rocket,
  ChevronRight, Check, X, AlertCircle
} from 'lucide-react';

// Main TrueFans Platform Component
const TrueFansApp = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [expandedAgent, setExpandedAgent] = useState(null);
  const [showSelectionProcess, setShowSelectionProcess] = useState(false);
  
  const [user] = useState({
    id: '1',
    name: 'Alex Rivera',
    role: 'artist',
    avatar: '🎤',
    location: 'Los Angeles, CA',
    labelStatus: 'considering', // 'independent', 'considering', 'signed'
    aiScore: 94
  });

  // Expanded AI Staff - 8 Departments with exactly 10 agents each (80 total)
  const [aiStaffDepartments] = useState({
    'A&R': {
      name: 'Artist & Repertoire',
      icon: Target,
      color: 'purple',
      description: 'Talent discovery, artist development, and creative direction',
      agents: [
        {
          name: 'Aria Blackstone',
          role: 'Head of A&R',
          specialty: 'Talent Discovery & Artist Development',
          avatar: '🎯',
          personality: 'Visionary and intuitive',
          backstory: 'Former Sony Music executive turned AI. Discovered 15 platinum artists in her human career. Now uses advanced pattern recognition to identify breakthrough potential.',
          expertise: ['Talent Scouting', 'Market Analysis', 'Artist Positioning'],
          yearsActive: 3,
          successRate: 94
        },
        {
          name: 'Marcus Chen',
          role: 'Creative Director',
          specialty: 'Artistic Vision & Sound Development',
          avatar: '🎨',
          personality: 'Innovative and collaborative',
          backstory: 'Grammy-winning producer who transitioned to AI to scale creative insights. Worked with Billie Eilish and The Weeknd before digital transformation.',
          expertise: ['Sound Design', 'Creative Direction', 'Genre Innovation'],
          yearsActive: 2,
          successRate: 91
        },
        {
          name: 'Luna Rodriguez',
          role: 'Emerging Talent Scout',
          specialty: 'Underground & Independent Artist Discovery',
          avatar: '🔍',
          personality: 'Curious and trend-aware',
          backstory: 'Former music blogger and indie label founder. Specialized in finding artists before they break mainstream. Now processes millions of tracks daily.',
          expertise: ['Indie Scene Analysis', 'Viral Prediction', 'Cultural Trends'],
          yearsActive: 2,
          successRate: 88
        },
        {
          name: 'David Kim',
          role: 'Genre Specialist',
          specialty: 'Hip-Hop & R&B Development',
          avatar: '🎤',
          personality: 'Street-smart and authentic',
          backstory: 'Former Def Jam A&R who helped break Drake and Kendrick Lamar. Brings deep understanding of urban music culture to AI analysis.',
          expertise: ['Hip-Hop Culture', 'R&B Trends', 'Urban Market Dynamics'],
          yearsActive: 3,
          successRate: 92
        },
        {
          name: 'Sophie Williams',
          role: 'Pop Music Strategist',
          specialty: 'Mainstream Pop & Commercial Appeal',
          avatar: '⭐',
          personality: 'Energetic and market-focused',
          backstory: 'Former Capitol Records executive who worked on campaigns for Dua Lipa and Harry Styles. Expert in creating mainstream crossover hits.',
          expertise: ['Pop Trends', 'Commercial Viability', 'Radio Strategy'],
          yearsActive: 2,
          successRate: 89
        },
        {
          name: 'Alex Thompson',
          role: 'Electronic Music Curator',
          specialty: 'EDM, Techno & Electronic Genres',
          avatar: '🎛️',
          personality: 'Technical and forward-thinking',
          backstory: 'Former Beatport executive and DJ who understood electronic music\'s digital-first nature. Pioneer in AI-assisted electronic music curation.',
          expertise: ['Electronic Genres', 'Festival Circuit', 'DJ Culture'],
          yearsActive: 3,
          successRate: 90
        },
        {
          name: 'Maya Patel',
          role: 'Alternative Rock Specialist',
          specialty: 'Rock, Indie & Alternative Genres',
          avatar: '🎸',
          personality: 'Rebellious and authentic',
          backstory: 'Former Sub Pop Records A&R who discovered several indie rock sensations. Brings underground credibility to mainstream success.',
          expertise: ['Rock Subgenres', 'Alternative Culture', 'Live Music Scene'],
          yearsActive: 2,
          successRate: 87
        },
        {
          name: 'Carlos Mendez',
          role: 'Latin Music Expert',
          specialty: 'Latin, Reggaeton & World Music',
          avatar: '🌎',
          personality: 'Passionate and culturally aware',
          backstory: 'Former Universal Latin executive who worked during the Latin music explosion. Expert in cross-cultural music marketing.',
          expertise: ['Latin Genres', 'Global Markets', 'Cultural Authenticity'],
          yearsActive: 2,
          successRate: 93
        },
        {
          name: 'Riley Foster',
          role: 'Country Music Specialist',
          specialty: 'Country, Folk & Americana',
          avatar: '🤠',
          personality: 'Traditional yet innovative',
          backstory: 'Former Nashville executive who bridged traditional country with modern sounds. Expert in authentic storytelling and crossover potential.',
          expertise: ['Country Music', 'Storytelling', 'Nashville Scene'],
          yearsActive: 3,
          successRate: 86
        },
        {
          name: 'Jordan Blake',
          role: 'Jazz & Classical Curator',
          specialty: 'Jazz, Classical & Instrumental Music',
          avatar: '🎺',
          personality: 'Sophisticated and detail-oriented',
          backstory: 'Former Blue Note Records executive with classical training. Expert in sophisticated musical arrangements and niche market development.',
          expertise: ['Jazz Standards', 'Classical Crossover', 'Instrumental Music'],
          yearsActive: 4,
          successRate: 85
        }
      ]
    },
    'Marketing': {
      name: 'Marketing & Promotion',
      icon: Megaphone,
      color: 'blue',
      description: 'Campaign strategy, brand building, and audience engagement',
      agents: [
        {
          name: 'Melody Harrison',
          role: 'Head of Marketing',
          specialty: 'Campaign Strategy & Brand Development',
          avatar: '📈',
          personality: 'Strategic and data-driven',
          backstory: 'Former Spotify marketing director who revolutionized playlist placement strategies. Now uses AI to predict viral moments and optimize campaigns.',
          expertise: ['Campaign Strategy', 'Brand Development', 'Market Positioning'],
          yearsActive: 3,
          successRate: 95
        },
        {
          name: 'Jake Morrison',
          role: 'Social Media Strategist',
          specialty: 'TikTok, Instagram & Viral Content',
          avatar: '📱',
          personality: 'Creative and trend-savvy',
          backstory: 'Former TikTok music partnerships manager who understood the platform before it exploded. Expert in creating viral music moments.',
          expertise: ['Social Media', 'Viral Content', 'Influencer Relations'],
          yearsActive: 2,
          successRate: 92
        },
        {
          name: 'Emma Foster',
          role: 'PR & Media Relations',
          specialty: 'Press Coverage & Media Strategy',
          avatar: '📰',
          personality: 'Articulate and relationship-focused',
          backstory: 'Former Rolling Stone music journalist turned publicist. Built relationships with every major music outlet before becoming AI.',
          expertise: ['Media Relations', 'Press Strategy', 'Crisis Management'],
          yearsActive: 3,
          successRate: 89
        },
        {
          name: 'Ryan Cooper',
          role: 'Digital Marketing Specialist',
          specialty: 'Online Advertising & Performance Marketing',
          avatar: '💻',
          personality: 'Analytical and performance-focused',
          backstory: 'Former Google Ads specialist who optimized campaigns for major labels. Expert in converting digital spend into measurable results.',
          expertise: ['Digital Advertising', 'Performance Marketing', 'ROI Optimization'],
          yearsActive: 2,
          successRate: 91
        },
        {
          name: 'Zoe Martinez',
          role: 'Content Creator',
          specialty: 'Visual Content & Creative Assets',
          avatar: '🎬',
          personality: 'Visual and storytelling-focused',
          backstory: 'Former music video director who worked with major artists. Now creates AI-generated content concepts and visual strategies.',
          expertise: ['Visual Content', 'Music Videos', 'Creative Concepts'],
          yearsActive: 2,
          successRate: 88
        },
        {
          name: 'Oliver Zhang',
          role: 'Influencer Relations Manager',
          specialty: 'Creator Partnerships & Collaborations',
          avatar: '🤝',
          personality: 'Networked and collaborative',
          backstory: 'Former talent manager who represented top music influencers. Expert in matching artists with the right creator partnerships.',
          expertise: ['Influencer Marketing', 'Creator Economy', 'Partnership Strategy'],
          yearsActive: 2,
          successRate: 90
        },
        {
          name: 'Isabella Santos',
          role: 'Brand Partnership Specialist',
          specialty: 'Corporate Sponsorships & Brand Deals',
          avatar: '🏢',
          personality: 'Business-minded and strategic',
          backstory: 'Former brand marketing executive at Nike who created music partnerships. Expert in aligning artist brands with corporate partners.',
          expertise: ['Brand Partnerships', 'Sponsorship Deals', 'Corporate Relations'],
          yearsActive: 3,
          successRate: 87
        },
        {
          name: 'Tyler Brooks',
          role: 'Fan Engagement Specialist',
          specialty: 'Community Building & Fan Relations',
          avatar: '❤️',
          personality: 'Empathetic and community-focused',
          backstory: 'Former fan club manager for major artists who understood the power of dedicated fanbases. Now scales personal connection through AI.',
          expertise: ['Fan Communities', 'Engagement Strategy', 'Loyalty Programs'],
          yearsActive: 2,
          successRate: 93
        },
        {
          name: 'Chloe Anderson',
          role: 'Email Marketing Specialist',
          specialty: 'Direct Fan Communication & Newsletters',
          avatar: '📧',
          personality: 'Direct and relationship-focused',
          backstory: 'Former Mailchimp music specialist who built direct artist-fan relationships. Expert in personal communication at scale.',
          expertise: ['Email Marketing', 'Fan Communication', 'Direct Marketing'],
          yearsActive: 2,
          successRate: 84
        },
        {
          name: 'Noah Williams',
          role: 'Event Marketing Manager',
          specialty: 'Concert Promotion & Live Event Marketing',
          avatar: '🎪',
          personality: 'Energetic and event-focused',
          backstory: 'Former Live Nation marketing manager who promoted major tours. Expert in translating online buzz into live attendance.',
          expertise: ['Event Marketing', 'Concert Promotion', 'Live Experiences'],
          yearsActive: 3,
          successRate: 88
        }
      ]
    },
    'Distribution': {
      name: 'Distribution & Platforms',
      icon: Globe,
      color: 'green',
      description: 'Platform optimization, streaming strategy, and global distribution',
      agents: [
        {
          name: 'Sync Anderson',
          role: 'Head of Distribution',
          specialty: 'Platform Optimization & Strategy',
          avatar: '🌐',
          personality: 'Technical and globally-minded',
          backstory: 'Former DistroKid executive who built relationships with every major streaming platform. Expert in platform algorithms and optimization.',
          expertise: ['Platform Relations', 'Algorithm Optimization', 'Global Distribution'],
          yearsActive: 3,
          successRate: 96
        },
        {
          name: 'Nina Petrov',
          role: 'Streaming Strategist',
          specialty: 'Spotify, Apple Music & Playlist Placement',
          avatar: '🎵',
          personality: 'Data-driven and relationship-focused',
          backstory: 'Former Spotify playlist curator who understood what makes songs stick. Now uses AI to predict playlist placement success.',
          expertise: ['Playlist Strategy', 'Streaming Optimization', 'Platform Analytics'],
          yearsActive: 2,
          successRate: 94
        },
        {
          name: 'Hassan Ali',
          role: 'International Markets Specialist',
          specialty: 'Global Expansion & Regional Platforms',
          avatar: '🗺️',
          personality: 'Culturally aware and strategic',
          backstory: 'Former Warner Music International executive who launched artists in 50+ countries. Expert in navigating global music markets.',
          expertise: ['International Markets', 'Regional Platforms', 'Cultural Adaptation'],
          yearsActive: 3,
          successRate: 91
        },
        {
          name: 'Grace Liu',
          role: 'Platform Relations Manager',
          specialty: 'Direct Platform Partnerships',
          avatar: '🤝',
          personality: 'Diplomatic and relationship-focused',
          backstory: 'Former business development executive who negotiated deals with streaming platforms. Expert in securing favorable terms.',
          expertise: ['Platform Partnerships', 'Deal Negotiation', 'Revenue Optimization'],
          yearsActive: 2,
          successRate: 89
        },
        {
          name: 'Marcus Johnson',
          role: 'Digital Sales Specialist',
          specialty: 'iTunes, Bandcamp & Direct Sales',
          avatar: '💿',
          personality: 'Sales-focused and strategic',
          backstory: 'Former digital sales manager who maximized revenue across all platforms. Expert in optimizing pricing and release strategies.',
          expertise: ['Digital Sales', 'Pricing Strategy', 'Revenue Maximization'],
          yearsActive: 2,
          successRate: 88
        },
        {
          name: 'Priya Sharma',
          role: 'Emerging Platforms Scout',
          specialty: 'New Platform Discovery & Early Adoption',
          avatar: '🚀',
          personality: 'Innovative and forward-thinking',
          backstory: 'Former tech startup advisor who identified TikTok\'s music potential early. Expert in spotting the next big platform.',
          expertise: ['Platform Innovation', 'Early Adoption', 'Trend Prediction'],
          yearsActive: 2,
          successRate: 92
        },
        {
          name: 'Diego Ramirez',
          role: 'Latin America Specialist',
          specialty: 'LATAM Markets & Regional Platforms',
          avatar: '🌎',
          personality: 'Passionate and market-focused',
          backstory: 'Former Sony Music Latin executive who understood regional market nuances. Expert in Latin American music distribution.',
          expertise: ['LATAM Markets', 'Regional Strategy', 'Cultural Marketing'],
          yearsActive: 3,
          successRate: 90
        },
        {
          name: 'Yuki Tanaka',
          role: 'Asia-Pacific Specialist',
          specialty: 'Asian Markets & K-Pop Strategy',
          avatar: '🎌',
          personality: 'Detail-oriented and culturally sensitive',
          backstory: 'Former HYBE (BTS label) international manager who understood Asian market dynamics. Expert in cross-cultural music success.',
          expertise: ['Asian Markets', 'K-Pop Strategy', 'Cross-Cultural Marketing'],
          yearsActive: 2,
          successRate: 93
        },
        {
          name: 'Ethan Moore',
          role: 'European Markets Manager',
          specialty: 'EU Distribution & Regional Compliance',
          avatar: '🇪🇺',
          personality: 'Methodical and compliance-focused',
          backstory: 'Former Universal Music Europe executive who navigated complex EU regulations. Expert in European market penetration.',
          expertise: ['European Markets', 'Regulatory Compliance', 'Regional Distribution'],
          yearsActive: 3,
          successRate: 87
        },
        {
          name: 'Amara Okafor',
          role: 'African Markets Specialist',
          specialty: 'Afrobeats & African Music Distribution',
          avatar: '🌍',
          personality: 'Cultural ambassador and growth-focused',
          backstory: 'Former Mavin Records international manager who helped Afrobeats go global. Expert in emerging African music markets.',
          expertise: ['African Markets', 'Afrobeats', 'Emerging Markets'],
          yearsActive: 2,
          successRate: 89
        }
      ]
    },
    'Analytics': {
      name: 'Data & Analytics',
      icon: BarChart,
      color: 'orange',
      description: 'Performance tracking, predictive analytics, and business intelligence',
      agents: [
        {
          name: 'Dr. Sarah Mitchell',
          role: 'Head of Analytics',
          specialty: 'Predictive Analytics & Business Intelligence',
          avatar: '📊',
          personality: 'Analytical and insight-driven',
          backstory: 'Former Spotify data scientist with PhD in Machine Learning. Built the algorithms that power music recommendation systems.',
          expertise: ['Predictive Analytics', 'Machine Learning', 'Business Intelligence'],
          yearsActive: 3,
          successRate: 97
        },
        {
          name: 'Kevin Park',
          role: 'Performance Analyst',
          specialty: 'Streaming Analytics & KPI Tracking',
          avatar: '📈',
          personality: 'Detail-oriented and performance-focused',
          backstory: 'Former Chartmetric analyst who tracked every metric that mattered in music. Expert in translating data into actionable insights.',
          expertise: ['Performance Tracking', 'KPI Analysis', 'Trend Identification'],
          yearsActive: 2,
          successRate: 94
        },
        {
          name: 'Lisa Wong',
          role: 'Audience Intelligence Specialist',
          specialty: 'Fan Demographics & Behavior Analysis',
          avatar: '👥',
          personality: 'Empathetic and data-driven',
          backstory: 'Former Facebook audience insights manager who understood fan behavior patterns. Expert in audience segmentation and targeting.',
          expertise: ['Audience Analysis', 'Demographic Research', 'Behavioral Patterns'],
          yearsActive: 2,
          successRate: 91
        },
        {
          name: 'Ahmed Hassan',
          role: 'Revenue Analytics Specialist',
          specialty: 'Financial Performance & Revenue Optimization',
          avatar: '💰',
          personality: 'Financial-minded and strategic',
          backstory: 'Former music industry financial analyst who optimized revenue streams for major labels. Expert in maximizing artist earnings.',
          expertise: ['Revenue Analysis', 'Financial Modeling', 'Profit Optimization'],
          yearsActive: 3,
          successRate: 95
        },
        {
          name: 'Rachel Green',
          role: 'Market Research Analyst',
          specialty: 'Industry Trends & Competitive Analysis',
          avatar: '🔍',
          personality: 'Research-focused and thorough',
          backstory: 'Former Nielsen Music researcher who tracked industry trends before they became obvious. Expert in competitive intelligence.',
          expertise: ['Market Research', 'Competitive Analysis', 'Industry Trends'],
          yearsActive: 2,
          successRate: 89
        },
        {
          name: 'Tom Bradley',
          role: 'Social Media Analytics Expert',
          specialty: 'Social Engagement & Viral Prediction',
          avatar: '📱',
          personality: 'Social-savvy and trend-aware',
          backstory: 'Former Hootsuite analytics specialist who predicted viral content. Expert in social media performance measurement.',
          expertise: ['Social Analytics', 'Engagement Metrics', 'Viral Prediction'],
          yearsActive: 2,
          successRate: 92
        },
        {
          name: 'Maria Gonzalez',
          role: 'Playlist Analytics Specialist',
          specialty: 'Playlist Performance & Placement Strategy',
          avatar: '📋',
          personality: 'Strategic and playlist-focused',
          backstory: 'Former independent playlist curator who understood placement dynamics. Expert in playlist performance optimization.',
          expertise: ['Playlist Analytics', 'Placement Strategy', 'Curator Relations'],
          yearsActive: 2,
          successRate: 88
        },
        {
          name: 'James Wilson',
          role: 'Predictive Modeling Specialist',
          specialty: 'AI Forecasting & Trend Prediction',
          avatar: '🔮',
          personality: 'Future-focused and technical',
          backstory: 'Former Google AI researcher who applied machine learning to music prediction. Expert in forecasting music trends.',
          expertise: ['Predictive Modeling', 'AI Forecasting', 'Trend Analysis'],
          yearsActive: 3,
          successRate: 93
        },
        {
          name: 'Sophia Chen',
          role: 'Real-Time Analytics Manager',
          specialty: 'Live Data Monitoring & Instant Insights',
          avatar: '⚡',
          personality: 'Fast-paced and reactive',
          backstory: 'Former Twitter analytics manager who monitored real-time trends. Expert in instant data interpretation and rapid response.',
          expertise: ['Real-Time Analytics', 'Live Monitoring', 'Instant Insights'],
          yearsActive: 2,
          successRate: 90
        },
        {
          name: 'Daniel Rodriguez',
          role: 'Geographic Analytics Specialist',
          specialty: 'Location-Based Performance & Regional Insights',
          avatar: '🗺️',
          personality: 'Geographic-minded and detail-oriented',
          backstory: 'Former Foursquare data analyst who understood location-based behavior. Expert in geographic performance patterns.',
          expertise: ['Geographic Analytics', 'Regional Performance', 'Location Intelligence'],
          yearsActive: 2,
          successRate: 86
        }
      ]
    },
    'Creative': {
      name: 'Creative Services',
      icon: Palette,
      color: 'pink',
      description: 'Visual design, video production, and creative content development',
      agents: [
        {
          name: 'Beat Thompson',
          role: 'Head of Creative',
          specialty: 'Creative Direction & Visual Strategy',
          avatar: '🎨',
          personality: 'Visionary and artistically-minded',
          backstory: 'Former creative director for Interscope Records who designed iconic album campaigns. Expert in translating music into visual experiences.',
          expertise: ['Creative Direction', 'Visual Strategy', 'Brand Identity'],
          yearsActive: 3,
          successRate: 94
        },
        {
          name: 'Chloe Davis',
          role: 'Graphic Design Specialist',
          specialty: 'Album Art, Logos & Visual Identity',
          avatar: '🖼️',
          personality: 'Detail-oriented and aesthetically-focused',
          backstory: 'Former freelance designer who created artwork for Grammy-winning albums. Expert in music-focused visual design.',
          expertise: ['Graphic Design', 'Album Artwork', 'Visual Identity'],
          yearsActive: 2,
          successRate: 91
        },
        {
          name: 'Max Rodriguez',
          role: 'Video Production Director',
          specialty: 'Music Videos & Visual Content',
          avatar: '🎬',
          personality: 'Cinematic and storytelling-focused',
          backstory: 'Former music video director who worked with major artists. Expert in creating compelling visual narratives for music.',
          expertise: ['Video Production', 'Music Videos', 'Visual Storytelling'],
          yearsActive: 3,
          successRate: 89
        },
        {
          name: 'Ava Kim',
          role: 'Motion Graphics Specialist',
          specialty: 'Animated Content & Digital Assets',
          avatar: '✨',
          personality: 'Technical and creative',
          backstory: 'Former motion graphics artist for major music festivals. Expert in creating dynamic visual content for digital platforms.',
          expertise: ['Motion Graphics', 'Animation', 'Digital Content'],
          yearsActive: 2,
          successRate: 87
        },
        {
          name: 'Jordan Lee',
          role: 'Photography Director',
          specialty: 'Artist Photography & Visual Campaigns',
          avatar: '📸',
          personality: 'Visual and personality-focused',
          backstory: 'Former celebrity photographer who captured iconic music moments. Expert in artist visual representation.',
          expertise: ['Photography', 'Visual Campaigns', 'Artist Imagery'],
          yearsActive: 2,
          successRate: 90
        },
        {
          name: 'Sophia Turner',
          role: 'Web Design Specialist',
          specialty: 'Artist Websites & Digital Experiences',
          avatar: '💻',
          personality: 'User-focused and technical',
          backstory: 'Former UX designer who created digital experiences for major artists. Expert in fan-focused web design.',
          expertise: ['Web Design', 'UX/UI', 'Digital Experiences'],
          yearsActive: 2,
          successRate: 88
        },
        {
          name: 'Lucas Brown',
          role: 'Brand Identity Specialist',
          specialty: 'Artist Branding & Style Development',
          avatar: '🎭',
          personality: 'Brand-focused and strategic',
          backstory: 'Former brand consultant who developed visual identities for breakthrough artists. Expert in cohesive brand development.',
          expertise: ['Brand Identity', 'Style Development', 'Visual Consistency'],
          yearsActive: 3,
          successRate: 92
        },
        {
          name: 'Mia Chen',
          role: 'Social Media Creative',
          specialty: 'Social Content & Platform-Specific Design',
          avatar: '📱',
          personality: 'Platform-savvy and trend-aware',
          backstory: 'Former social media creative for major influencers. Expert in platform-specific visual content creation.',
          expertise: ['Social Media Design', 'Platform Optimization', 'Trend Integration'],
          yearsActive: 2,
          successRate: 89
        },
        {
          name: 'Ethan Foster',
          role: '3D Design Specialist',
          specialty: 'Virtual Concerts & 3D Visual Experiences',
          avatar: '🎮',
          personality: 'Tech-forward and immersive',
          backstory: 'Former game designer who transitioned to music visualization. Expert in creating immersive 3D experiences for artists.',
          expertise: ['3D Design', 'Virtual Reality', 'Immersive Experiences'],
          yearsActive: 2,
          successRate: 85
        },
        {
          name: 'Zara Williams',
          role: 'Fashion & Styling Consultant',
          specialty: 'Artist Styling & Visual Aesthetics',
          avatar: '👗',
          personality: 'Fashion-forward and trend-setting',
          backstory: 'Former celebrity stylist who worked with Grammy performers. Expert in creating iconic artist looks and visual aesthetics.',
          expertise: ['Fashion Styling', 'Visual Aesthetics', 'Trend Setting'],
          yearsActive: 3,
          successRate: 88
        }
      ]
    },
    'Business': {
      name: 'Business Development',
      icon: Briefcase,
      color: 'indigo',
      description: 'Partnerships, licensing, sync opportunities, and revenue diversification',
      agents: [
        {
          name: 'Victoria Sterling',
          role: 'Head of Business Development',
          specialty: 'Strategic Partnerships & Revenue Growth',
          avatar: '💼',
          personality: 'Strategic and deal-focused',
          backstory: 'Former Warner Music business development executive who closed major partnership deals. Expert in creating new revenue streams.',
          expertise: ['Strategic Partnerships', 'Deal Negotiation', 'Revenue Development'],
          yearsActive: 3,
          successRate: 95
        },
        {
          name: 'Robert Chen',
          role: 'Sync Licensing Specialist',
          specialty: 'Film, TV & Commercial Placements',
          avatar: '🎭',
          personality: 'Entertainment-focused and networked',
          backstory: 'Former sync agent who placed music in major films and TV shows. Expert in entertainment industry relationships.',
          expertise: ['Sync Licensing', 'Film/TV Placement', 'Commercial Music'],
          yearsActive: 3,
          successRate: 91
        },
        {
          name: 'Amanda Foster',
          role: 'Brand Partnership Manager',
          specialty: 'Corporate Collaborations & Sponsorships',
          avatar: '🤝',
          personality: 'Relationship-focused and business-minded',
          backstory: 'Former brand partnership manager who connected artists with major corporations. Expert in mutually beneficial partnerships.',
          expertise: ['Brand Partnerships', 'Corporate Relations', 'Sponsorship Deals'],
          yearsActive: 2,
          successRate: 88
        },
        {
          name: 'Daniel Kim',
          role: 'Licensing & Rights Manager',
          specialty: 'Music Rights & Publishing Opportunities',
          avatar: '📜',
          personality: 'Detail-oriented and rights-focused',
          backstory: 'Former music publisher who maximized rights revenue for songwriters. Expert in complex licensing arrangements.',
          expertise: ['Music Licensing', 'Publishing Rights', 'Revenue Optimization'],
          yearsActive: 3,
          successRate: 93
        },
        {
          name: 'Elena Rodriguez',
          role: 'Gaming & Tech Partnerships',
          specialty: 'Video Games, Apps & Tech Integrations',
          avatar: '🎮',
          personality: 'Tech-savvy and innovative',
          backstory: 'Former gaming industry executive who understood music\'s role in interactive media. Expert in tech partnerships.',
          expertise: ['Gaming Partnerships', 'Tech Integration', 'Interactive Media'],
          yearsActive: 2,
          successRate: 89
        },
        {
          name: 'Michael Thompson',
          role: 'Live Events Coordinator',
          specialty: 'Concerts, Festivals & Live Opportunities',
          avatar: '🎪',
          personality: 'Event-focused and energetic',
          backstory: 'Former festival booking agent who understood live music economics. Expert in live performance opportunities.',
          expertise: ['Live Events', 'Festival Booking', 'Concert Strategy'],
          yearsActive: 2,
          successRate: 87
        },
        {
          name: 'Sarah Williams',
          role: 'Merchandise & Products Manager',
          specialty: 'Artist Merchandise & Product Development',
          avatar: '👕',
          personality: 'Product-focused and fan-oriented',
          backstory: 'Former merchandise manager for major touring artists. Expert in fan-focused product development.',
          expertise: ['Merchandise Strategy', 'Product Development', 'Fan Products'],
          yearsActive: 2,
          successRate: 90
        },
        {
          name: 'Alex Martinez',
          role: 'Investment & Funding Specialist',
          specialty: 'Artist Investment & Financial Growth',
          avatar: '💎',
          personality: 'Financial-minded and growth-focused',
          backstory: 'Former music industry investor who funded breakthrough artists. Expert in artist financial development.',
          expertise: ['Artist Investment', 'Financial Planning', 'Growth Strategy'],
          yearsActive: 3,
          successRate: 92
        },
        {
          name: 'Olivia Chang',
          role: 'NFT & Digital Assets Manager',
          specialty: 'Blockchain Music & Digital Collectibles',
          avatar: '🪙',
          personality: 'Crypto-native and innovative',
          backstory: 'Former OpenSea music category manager who understood NFT potential for artists. Expert in digital asset monetization.',
          expertise: ['NFT Strategy', 'Digital Assets', 'Blockchain Music'],
          yearsActive: 2,
          successRate: 84
        },
        {
          name: 'Ryan Murphy',
          role: 'Podcast & Audio Content Specialist',
          specialty: 'Podcast Partnerships & Audio Content',
          avatar: '🎙️',
          personality: 'Audio-focused and content-driven',
          backstory: 'Former Spotify podcast partnerships manager who understood audio content monetization. Expert in podcast and audio opportunities.',
          expertise: ['Podcast Partnerships', 'Audio Content', 'Voice Marketing'],
          yearsActive: 2,
          successRate: 86
        }
      ]
    },
    'Technology': {
      name: 'Technology & Innovation',
      icon: Code,
      color: 'cyan',
      description: 'Platform development, AI tools, and technical innovation',
      agents: [
        {
          name: 'Dr. Alex Chen',
          role: 'Head of Technology',
          specialty: 'AI Development & Technical Strategy',
          avatar: '🤖',
          personality: 'Technical and innovation-focused',
          backstory: 'Former Google AI researcher with PhD in Machine Learning. Pioneer in applying AI to music industry challenges.',
          expertise: ['AI Development', 'Machine Learning', 'Technical Strategy'],
          yearsActive: 3,
          successRate: 98
        },
        {
          name: 'Maya Patel',
          role: 'Platform Development Lead',
          specialty: 'Artist Tools & Platform Features',
          avatar: '⚙️',
          personality: 'User-focused and technical',
          backstory: 'Former Spotify product manager who built artist-facing tools. Expert in creating technology that empowers artists.',
          expertise: ['Platform Development', 'Artist Tools', 'User Experience'],
          yearsActive: 2,
          successRate: 94
        },
        {
          name: 'Jake Morrison',
          role: 'Data Engineering Specialist',
          specialty: 'Data Infrastructure & Analytics Systems',
          avatar: '📊',
          personality: 'Data-focused and systematic',
          backstory: 'Former Netflix data engineer who built recommendation systems. Expert in large-scale data processing for music.',
          expertise: ['Data Engineering', 'Analytics Systems', 'Infrastructure'],
          yearsActive: 2,
          successRate: 91
        },
        {
          name: 'Luna Zhang',
          role: 'AI Music Analysis Expert',
          specialty: 'Audio Analysis & Music Intelligence',
          avatar: '🎵',
          personality: 'Music-focused and technical',
          backstory: 'Former Shazam engineer who built music recognition technology. Expert in AI-powered music analysis.',
          expertise: ['Audio Analysis', 'Music Recognition', 'AI Music Tools'],
          yearsActive: 3,
          successRate: 96
        },
        {
          name: 'Ryan Cooper',
          role: 'Blockchain & Web3 Specialist',
          specialty: 'NFTs, Crypto & Decentralized Music',
          avatar: '⛓️',
          personality: 'Future-focused and decentralization-minded',
          backstory: 'Former blockchain developer who saw music\'s Web3 potential early. Expert in decentralized music technologies.',
          expertise: ['Blockchain Technology', 'NFTs', 'Web3 Music'],
          yearsActive: 2,
          successRate: 87
        },
        {
          name: 'Zoe Kim',
          role: 'Mobile App Developer',
          specialty: 'Artist Mobile Apps & Fan Engagement Tools',
          avatar: '📱',
          personality: 'Mobile-first and user-focused',
          backstory: 'Former Instagram developer who understood mobile-first music consumption. Expert in fan engagement apps.',
          expertise: ['Mobile Development', 'App Design', 'Fan Engagement'],
          yearsActive: 2,
          successRate: 89
        },
        {
          name: 'Oliver Martinez',
          role: 'API & Integration Specialist',
          specialty: 'Platform Integrations & Third-Party APIs',
          avatar: '🔗',
          personality: 'Integration-focused and systematic',
          backstory: 'Former Zapier engineer who connected disparate systems. Expert in seamless platform integrations.',
          expertise: ['API Development', 'System Integration', 'Platform Connectivity'],
          yearsActive: 2,
          successRate: 92
        },
        {
          name: 'Isabella Santos',
          role: 'Security & Privacy Specialist',
          specialty: 'Data Security & Artist Privacy Protection',
          avatar: '🔒',
          personality: 'Security-focused and protective',
          backstory: 'Former cybersecurity expert who protected major entertainment companies. Expert in artist data protection.',
          expertise: ['Data Security', 'Privacy Protection', 'Cybersecurity'],
          yearsActive: 3,
          successRate: 95
        },
        {
          name: 'Kai Nakamura',
          role: 'AR/VR Development Specialist',
          specialty: 'Augmented Reality & Virtual Concert Technology',
          avatar: '🥽',
          personality: 'Immersive and cutting-edge',
          backstory: 'Former Magic Leap developer who created AR music experiences. Expert in immersive technology for music.',
          expertise: ['AR/VR Development', 'Immersive Technology', 'Virtual Concerts'],
          yearsActive: 2,
          successRate: 88
        },
        {
          name: 'Aria Thompson',
          role: 'Voice AI & Audio Technology',
          specialty: 'Voice Recognition & Audio Processing',
          avatar: '🎤',
          personality: 'Audio-focused and innovative',
          backstory: 'Former Amazon Alexa music team engineer who built voice-activated music experiences. Expert in voice AI for music.',
          expertise: ['Voice AI', 'Audio Processing', 'Voice Recognition'],
          yearsActive: 2,
          successRate: 90
        }
      ]
    },
    'Support': {
      name: 'Artist Support & Success',
      icon: Heart,
      color: 'red',
      description: '24/7 artist support, career guidance, and personal development',
      agents: [
        {
          name: 'Grace Thompson',
          role: 'Head of Artist Success',
          specialty: 'Career Development & Artist Guidance',
          avatar: '🌟',
          personality: 'Supportive and growth-focused',
          backstory: 'Former artist manager who guided careers from bedroom producers to Grammy winners. Expert in holistic artist development.',
          expertise: ['Career Development', 'Artist Guidance', 'Success Strategy'],
          yearsActive: 3,
          successRate: 96
        },
        {
          name: 'Marcus Johnson',
          role: '24/7 Support Specialist',
          specialty: 'Immediate Artist Assistance & Problem Solving',
          avatar: '🆘',
          personality: 'Responsive and solution-focused',
          backstory: 'Former customer success manager who understood urgent artist needs. Expert in immediate problem resolution.',
          expertise: ['24/7 Support', 'Problem Solving', 'Crisis Management'],
          yearsActive: 2,
          successRate: 94
        },
        {
          name: 'Emma Foster',
          role: 'Mental Health & Wellness Advisor',
          specialty: 'Artist Wellbeing & Mental Health Support',
          avatar: '🧘',
          personality: 'Empathetic and wellness-focused',
          backstory: 'Former music therapist who understood artist mental health challenges. Expert in supporting artist wellbeing.',
          expertise: ['Mental Health', 'Wellness Support', 'Stress Management'],
          yearsActive: 2,
          successRate: 91
        },
        {
          name: 'Tyler Brooks',
          role: 'Financial Advisor',
          specialty: 'Artist Financial Planning & Money Management',
          avatar: '💰',
          personality: 'Financial-minded and educational',
          backstory: 'Former financial planner specializing in entertainment industry clients. Expert in artist financial success.',
          expertise: ['Financial Planning', 'Money Management', 'Investment Strategy'],
          yearsActive: 3,
          successRate: 89
        },
        {
          name: 'Nina Rodriguez',
          role: 'Legal Support Specialist',
          specialty: 'Contract Review & Legal Guidance',
          avatar: '⚖️',
          personality: 'Detail-oriented and protective',
          backstory: 'Former entertainment lawyer who protected artist interests. Expert in music industry legal matters.',
          expertise: ['Legal Support', 'Contract Review', 'Rights Protection'],
          yearsActive: 3,
          successRate: 93
        },
        {
          name: 'David Park',
          role: 'Technical Support Lead',
          specialty: 'Platform Issues & Technical Assistance',
          avatar: '🔧',
          personality: 'Technical and patient',
          backstory: 'Former technical support manager who solved complex platform issues. Expert in artist-facing technology.',
          expertise: ['Technical Support', 'Platform Issues', 'User Assistance'],
          yearsActive: 2,
          successRate: 88
        },
        {
          name: 'Sophie Williams',
          role: 'Education & Training Specialist',
          specialty: 'Artist Education & Skill Development',
          avatar: '📚',
          personality: 'Educational and empowering',
          backstory: 'Former music business professor who taught industry skills. Expert in artist education and development.',
          expertise: ['Artist Education', 'Skill Development', 'Industry Training'],
          yearsActive: 2,
          successRate: 90
        },
        {
          name: 'Carlos Mendez',
          role: 'Community Manager',
          specialty: 'Artist Community & Peer Connections',
          avatar: '👥',
          personality: 'Community-focused and connecting',
          backstory: 'Former community manager who built artist networks. Expert in fostering artist connections and collaboration.',
          expertise: ['Community Building', 'Artist Networking', 'Peer Support'],
          yearsActive: 2,
          successRate: 92
        },
        {
          name: 'Lily Chen',
          role: 'Personal Development Coach',
          specialty: 'Artist Growth & Performance Coaching',
          avatar: '🎯',
          personality: 'Motivational and growth-oriented',
          backstory: 'Former performance coach who worked with Olympic athletes and artists. Expert in peak performance development.',
          expertise: ['Performance Coaching', 'Personal Growth', 'Goal Achievement'],
          yearsActive: 3,
          successRate: 87
        },
        {
          name: 'Jordan Taylor',
          role: 'Crisis Management Specialist',
          specialty: 'Reputation Management & Crisis Response',
          avatar: '🚨',
          personality: 'Calm under pressure and strategic',
          backstory: 'Former crisis management consultant who handled celebrity scandals. Expert in protecting artist reputation.',
          expertise: ['Crisis Management', 'Reputation Protection', 'Media Response'],
          yearsActive: 3,
          successRate: 94
        }
      ]
    }
  });

  const [dashboardData] = useState({
    monthlyListeners: 124750,
    totalRevenue: 8950,
    engagementRate: 8.7,
    collaborationRequests: 12,
    labelOffers: 3,
    aiStaff: Object.values(aiStaffDepartments).flatMap(dept => dept.agents).slice(0, 8), // Featured staff for dashboard
    aiInsights: [
      {
        title: "Label Readiness Score: 94/100",
        description: "You're ready for label partnership! 80 AI staff members want to work with you",
        confidence: 94,
        type: "label-ready",
        action: "View Label Benefits"
      },
      {
        title: "Optimal Release Timing",
        description: "Your audience is most active on Fridays at 3 PM PST",
        confidence: 94,
        type: "timing",
        action: "Schedule Release"
      },
      {
        title: "Revenue Optimization",
        description: "Label partnership could increase your revenue by 340% (you keep 80%)",
        confidence: 91,
        type: "revenue",
        action: "See Projections"
      }
    ],
    recentActivity: [
      { type: 'ai-staff', text: 'Dr. Alex Chen (AI Tech Lead) wants to discuss platform integration', time: '30 mins ago' },
      { type: 'ai-staff', text: 'Aria Blackstone (AI A&R) spotted breakthrough potential in your latest track', time: '1 hour ago' },
      { type: 'label-offer', text: 'TrueFans LABEL sent 80/20 partnership proposal', time: '2 hours ago' },
      { type: 'ai-staff', text: 'Melody Harrison (AI Marketing) created viral campaign strategy', time: '3 hours ago' },
      { type: 'stream', text: 'New song hit 1K streams', time: '4 hours ago' },
      { type: 'collab', text: 'Maya Chen sent collaboration invite', time: '6 hours ago' }
    ],
    labelBenefits: {
      currentRevenue: 8950,
      projectedRevenue: 39380,
      projectedArtistShare: 31504, // 80% of projected revenue
      projectedLabelShare: 7876,   // 20% of projected revenue
      currentReach: 124750,
      projectedReach: 890000,
      aiStaffSupport: '24/7',
      distributionChannels: 150,
      marketingBudget: 50000,
      revenueSplit: {
        artist: 80,
        label: 20
      }
    }
  });

  // Landing Page Component
  const LandingPage = () => {
    const totalAIStaff = Object.values(aiStaffDepartments).reduce((total, dept) => total + dept.agents.length, 0);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-90"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative px-6 py-24 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                  <Music className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold">
                  TrueFans <span className="text-yellow-300">LABEL</span>
                </h1>
              </div>
              
              <p className="text-2xl mb-4 text-blue-100">
                The World's First AI-Powered Record Label
              </p>
              <p className="text-xl mb-8 text-blue-200">
                <span className="font-bold text-yellow-300">80 AI Staff Members</span> • <span className="font-bold text-green-300">80% Revenue Share</span> • <span className="font-bold text-white">100% Creative Control</span>
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Revolutionary 80/20 Revenue Split</h2>
                <p className="text-lg text-blue-100 mb-6">
                  Unlike traditional labels that take 50-85% of your earnings, TrueFans LABEL lets you keep 80% of ALL revenue while providing you with 80 specialized AI staff members working 24/7 for your success.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-300">80%</div>
                    <div className="text-blue-200">You Keep</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300">{totalAIStaff}</div>
                    <div className="text-blue-200">AI Staff</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">24/7</div>
                    <div className="text-blue-200">Support</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => setShowSelectionProcess(true)}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 font-bold text-lg flex items-center space-x-2 shadow-xl"
                >
                  <Trophy className="w-6 h-6" />
                  <span>Start Selection Process</span>
                </button>
                <button 
                  onClick={() => setCurrentView('dashboard')}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/30 transition-all duration-200 font-bold text-lg flex items-center space-x-2"
                >
                  <Eye className="w-6 h-6" />
                  <span>View Demo Dashboard</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Two Pathways Section */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Two Ways to Join TrueFans LABEL</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the path that works best for you. Both options give you access to all {totalAIStaff} AI staff members and the revolutionary 80/20 revenue split.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pathway 1: Direct Entry */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-blue-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Direct Entry</h3>
                      <p className="text-blue-600 font-semibold">Immediate Access</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">$3,000/month</div>
                    <p className="text-gray-600">Guaranteed roster spot with immediate access to all services</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Immediate access to all {totalAIStaff} AI staff</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">80% revenue share from day one</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Priority support and resources</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">No waiting period or requirements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Cancel anytime with 30-day notice</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-bold text-lg">
                    Choose Direct Entry
                  </button>
                </div>
              </div>

              {/* Pathway 2: TrueFans CONNECT */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-green-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-bl-xl font-bold">
                  RECOMMENDED
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 -translate-x-16"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">TrueFans CONNECT</h3>
                      <p className="text-green-600 font-semibold">Earn Your Way In</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">FREE</div>
                    <p className="text-gray-600">Prove your dedication over 6 months and join for free</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4 mb-6">
                    <h4 className="font-bold text-green-800 mb-2">6-Month Requirements:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-700">Develop and perform live shows</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-700">Build authentic audience engagement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-700">Generate fan donations/support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-700">Use TrueFans CONNECT tools consistently</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Access to TrueFans CONNECT platform</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Tools for audience building & monetization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">FREE label signing after 6 months</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Same 80% revenue share & AI staff access</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-bold text-lg">
                    Start TrueFans CONNECT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Staff Preview */}
        <div className="py-20 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Your {totalAIStaff} AI Staff Members</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every TrueFans LABEL artist gets access to our complete team of AI specialists across 8 departments, working 24/7 to accelerate your career.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {Object.entries(aiStaffDepartments).map(([key, dept]) => (
                <div key={key} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <dept.icon className={`w-12 h-12 mx-auto mb-4 text-${dept.color}-600`} />
                  <h3 className="font-bold text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{dept.agents.length} AI Agents</p>
                  <p className="text-xs text-gray-500">{dept.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button 
                onClick={() => setCurrentView('ai-staff')}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 font-bold text-lg flex items-center space-x-2 mx-auto"
              >
                <Bot className="w-6 h-6" />
                <span>Meet All {totalAIStaff} AI Staff</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="py-20 px-6 bg-gradient-to-r from-yellow-50 to-orange-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-yellow-200">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Guarantee to You</h2>
              <p className="text-xl text-gray-600 mb-8">
                Score above 85% in our AI-powered selection process and you're <span className="font-bold text-yellow-600">guaranteed</span> to be signed to TrueFans LABEL.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">85%+</div>
                  <div className="text-gray-600">Minimum Score</div>
                  <div className="text-sm text-gray-500 mt-1">AI-evaluated compatibility</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Guarantee</div>
                  <div className="text-sm text-gray-500 mt-1">Automatic label signing</div>
                </div>
              </div>

              <button 
                onClick={() => setShowSelectionProcess(true)}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 font-bold text-lg flex items-center space-x-2 mx-auto"
              >
                <Rocket className="w-6 h-6" />
                <span>Take Selection Process</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="py-16 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Music Career?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of music with TrueFans LABEL. Keep 80% of your earnings while {totalAIStaff} AI specialists work around the clock for your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowSelectionProcess(true)}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 font-bold text-lg"
              >
                Start Your Journey
              </button>
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200 font-bold text-lg"
              >
                Explore Platform
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Selection Process Modal
  const SelectionProcessModal = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;

    const steps = [
      {
        title: "Music Portfolio Analysis",
        description: "Upload your best tracks for AI analysis of commercial potential, production quality, and market fit.",
        icon: Music,
        requirements: ["3-5 of your best original tracks", "High-quality audio files (WAV/FLAC preferred)", "Track metadata and credits"]
      },
      {
        title: "Audience & Engagement Review",
        description: "Connect your social media and streaming platforms for audience analysis and engagement metrics.",
        icon: Users,
        requirements: ["Social media profiles (Instagram, TikTok, etc.)", "Streaming platform statistics", "Fan engagement data"]
      },
      {
        title: "Creative Vision Assessment",
        description: "Showcase your artistic vision, brand identity, and long-term career goals through our AI interview.",
        icon: Palette,
        requirements: ["Visual portfolio/mood boards", "Artist statement and bio", "Career goals and vision"]
      },
      {
        title: "Market Readiness Evaluation",
        description: "AI analysis of your market positioning, competitive landscape, and commercial viability.",
        icon: Target,
        requirements: ["Genre positioning analysis", "Competitive artist comparison", "Market opportunity assessment"]
      },
      {
        title: "AI Compatibility Score",
        description: "Final evaluation of how well you'll work with our 80 AI staff members and platform ecosystem.",
        icon: Bot,
        requirements: ["Technology adoption assessment", "Collaboration style evaluation", "Platform integration readiness"]
      }
    ];

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">TrueFans LABEL Selection Process</h2>
              <button 
                onClick={() => setShowSelectionProcess(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Step {currentStep} of {totalSteps}</span>
                <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Current Step */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  {React.createElement(steps[currentStep - 1].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{steps[currentStep - 1].title}</h3>
                  <p className="text-gray-600">{steps[currentStep - 1].description}</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4">Requirements for this step:</h4>
                <div className="space-y-2">
                  {steps[currentStep - 1].requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-blue-800">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* All Steps Overview */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Complete Selection Process:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      index + 1 === currentStep 
                        ? 'border-blue-500 bg-blue-50' 
                        : index + 1 < currentStep 
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <step.icon className={`w-6 h-6 mr-2 ${
                        index + 1 === currentStep 
                          ? 'text-blue-600' 
                          : index + 1 < currentStep 
                            ? 'text-green-600'
                            : 'text-gray-400'
                      }`} />
                      <span className="font-medium text-gray-900">{step.title}</span>
                    </div>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-yellow-600 mr-3" />
                <h4 className="text-xl font-bold text-gray-900">Our Guarantee</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Score 85% or higher and you're <span className="font-bold text-yellow-600">guaranteed</span> to be signed to TrueFans LABEL with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">80%</div>
                  <div className="text-sm text-gray-600">Revenue Share</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">80</div>
                  <div className="text-sm text-gray-600">AI Staff Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              {currentStep > 1 && (
                <button 
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Previous Step
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button 
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-bold"
                >
                  Continue to Next Step
                </button>
              ) : (
                <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-bold">
                  Submit for Evaluation
                </button>
              )}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                The entire process takes 15-30 minutes. Results available within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Navigation Component (Updated for Landing)
  const Navigation = () => {
    const navItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home, badge: null },
      { id: 'ai-staff', label: 'AI Staff', icon: Bot, badge: 'NEW' },
      { id: 'label-partnership', label: 'Label Partnership', icon: Crown, badge: user.labelStatus === 'considering' ? '!' : null },
      { id: 'community', label: 'Community', icon: Users, badge: '12' },
      { id: 'collaboration', label: 'Collaborate', icon: Music, badge: null },
      { id: 'geographic', label: 'Local Scene', icon: Map, badge: null },
      { id: 'ai', label: 'AI Intelligence', icon: Brain, badge: 'PRO' },
      { id: 'analytics', label: 'Analytics', icon: BarChart, badge: null },
      { id: 'mentorship', label: 'Mentorship', icon: GraduationCap, badge: null },
      { id: 'advocacy', label: 'Advocacy', icon: Megaphone, badge: null }
    ];

    if (user.role === 'label' || user.labelStatus === 'signed') {
      navItems.push({ id: 'enterprise', label: 'Label Operations', icon: Building, badge: 'LABEL' });
    }

    return (
      <div className="w-72 bg-white shadow-xl border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TrueFans LABEL
              </h1>
              <p className="text-xs text-gray-500 flex items-center">
                <Bot className="w-3 h-3 mr-1" />
                80 AI Staff Members
              </p>
            </div>
          </div>
        </div>

        {/* Back to Landing */}
        <div className="p-4 border-b border-gray-200">
          <button 
            onClick={() => setCurrentView('landing')}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 hover:from-yellow-100 hover:to-orange-100 transition-all duration-200"
          >
            <ArrowRight className="w-5 h-5 text-yellow-600 rotate-180" />
            <span className="font-medium text-yellow-800">Back to Landing</span>
          </button>
        </div>

        {/* Label Status Banner */}
        {user.labelStatus === 'considering' && (
          <div className="mx-4 mt-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-800">80/20 Deal Pending</span>
            </div>
            <p className="text-xs text-yellow-700 mt-1">80 AI staff ready to work with you!</p>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-blue-100 text-blue-700 shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    item.badge === 'PRO' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' :
                    item.badge === 'LABEL' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                    item.badge === 'NEW' ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' :
                    item.badge === '!' ? 'bg-red-500 text-white animate-pulse' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {user.avatar}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-500 capitalize flex items-center">
                {user.labelStatus === 'signed' ? (
                  <>
                    <Crown className="w-3 h-3 mr-1 text-yellow-500" />
                    Label Artist (80%)
                  </>
                ) : user.labelStatus === 'considering' ? (
                  <>
                    <Clock className="w-3 h-3 mr-1 text-orange-500" />
                    Considering 80/20 Deal
                  </>
                ) : (
                  <>Independent {user.role}</>
                )}
              </p>
            </div>
            <Settings className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    );
  };

  // Header Component (Updated)
  const Header = () => {
    return (
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search 80 AI staff members, services, insights..."
                className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Globe className="w-4 h-4" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Bot className="w-4 h-4 text-blue-600" />
              <span className="text-gray-600">AI Score: {user.aiScore}/100</span>
            </div>
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            {user.labelStatus === 'considering' ? (
              <button 
                onClick={() => setCurrentView('label-partnership')}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 animate-pulse"
              >
                Review 80/20 Deal
              </button>
            ) : (
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Quick Action
              </button>
            )}
          </div>
        </div>
      </header>
    );
  };

  // Dashboard View (Updated)
  const DashboardView = () => {
    const totalAIStaff = Object.values(aiStaffDepartments).reduce((total, dept) => total + dept.agents.length, 0);
    
    const metrics = [
      {
        title: 'Monthly Listeners',
        value: dashboardData.monthlyListeners.toLocaleString(),
        change: '+12.5%',
        icon: Users,
        color: 'blue',
        labelProjection: dashboardData.labelBenefits.projectedReach.toLocaleString()
      },
      {
        title: 'Total Revenue',
        value: `$${dashboardData.totalRevenue.toLocaleString()}`,
        change: '+8.3%',
        icon: DollarSign,
        color: 'green',
        labelProjection: `$${dashboardData.labelBenefits.projectedArtistShare.toLocaleString()} (80%)`
      },
      {
        title: 'AI Staff Interest',
        value: totalAIStaff.toString(),
        change: `${totalAIStaff} ready`,
        icon: Bot,
        color: 'purple'
      },
      {
        title: 'Label Readiness',
        value: `${user.aiScore}/100`,
        change: 'Ready!',
        icon: Crown,
        color: 'yellow'
      }
    ];

    return (
      <div className="p-6 space-y-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center">
                Welcome back, {user.name}! 
                {user.labelStatus === 'considering' && <Crown className="w-8 h-8 ml-3 text-yellow-300 animate-bounce" />}
              </h1>
              <p className="text-blue-100 text-lg mb-4">
                {user.labelStatus === 'considering' 
                  ? `🎉 Congratulations! All ${totalAIStaff} AI staff members want to work with you. Review your 80/20 partnership offer below - you keep 80% of ALL revenues!`
                  : `Your music is performing exceptionally well. You're ready for the next level with ${totalAIStaff} AI-powered staff members!`
                }
              </p>
              {user.labelStatus === 'considering' && (
                <button 
                  onClick={() => setCurrentView('label-partnership')}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center space-x-2"
                >
                  <Crown className="w-5 h-5" />
                  <span>Review 80/20 Partnership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <Bot className="w-8 h-8 text-blue-200 mb-2 mx-auto" />
                <p className="text-sm">AI Staff Ready</p>
                <p className="text-2xl font-bold">{totalAIStaff}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  metric.color === 'blue' ? 'bg-blue-100' :
                  metric.color === 'green' ? 'bg-green-100' :
                  metric.color === 'purple' ? 'bg-purple-100' :
                  metric.color === 'yellow' ? 'bg-yellow-100' :
                  'bg-red-100'
                }`}>
                  <metric.icon className={`w-6 h-6 ${
                    metric.color === 'blue' ? 'text-blue-600' :
                    metric.color === 'green' ? 'text-green-600' :
                    metric.color === 'purple' ? 'text-purple-600' :
                    metric.color === 'yellow' ? 'text-yellow-600' :
                    'text-red-600'
                  }`} />
                </div>
                <span className={`text-sm font-semibold ${
                  metric.change === 'Ready!' ? 'text-yellow-600' : 
                  metric.change.includes('ready') ? 'text-purple-600' :
                  'text-green-600'
                }`}>{metric.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium">{metric.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              {metric.labelProjection && (
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500">With Label:</p>
                  <p className="text-sm font-semibold text-purple-600">{metric.labelProjection}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* AI Departments Overview */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
            <Bot className="w-5 h-5 mr-2 text-purple-600" />
            AI Staff Departments ({Object.keys(aiStaffDepartments).length} Departments, {totalAIStaff} Agents)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(aiStaffDepartments).map(([key, dept]) => (
              <button
                key={key}
                onClick={() => setCurrentView('ai-staff')}
                className="p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group text-left"
              >
                <dept.icon className={`w-8 h-8 mb-2 text-${dept.color}-600`} />
                <h4 className="font-medium text-gray-900 group-hover:text-blue-700">{dept.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{dept.agents.length} AI Agents</p>
                <p className="text-xs text-gray-400">{dept.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Revenue Split Highlight */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                Artist-First Revenue Split
              </h3>
              <p className="text-gray-600">
                Unlike traditional labels, you keep the majority of your earnings with our revolutionary 80/20 split.
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-green-600">80%</div>
              <div className="text-sm text-gray-500">You Keep</div>
              <div className="text-2xl font-bold text-gray-400 mt-2">20%</div>
              <div className="text-xs text-gray-400">Label Services</div>
            </div>
          </div>
        </div>

        {/* Featured AI Staff & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured AI Staff */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Bot className="w-5 h-5 mr-2 text-purple-600" />
                Featured AI Staff
              </h3>
              <button 
                onClick={() => setCurrentView('ai-staff')}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Meet All {totalAIStaff} Staff
              </button>
            </div>
            
            <div className="space-y-4">
              {dashboardData.aiStaff.slice(0, 3).map((staff, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg">
                      {staff.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 flex items-center">
                        {staff.name}
                        <Bot className="w-4 h-4 ml-2 text-blue-500" />
                      </h4>
                      <p className="text-sm text-gray-600">{staff.role}</p>
                      <p className="text-xs text-gray-500 mt-1">Specialty: {staff.specialty}</p>
                      <button className="text-xs text-blue-600 hover:text-blue-700 mt-2">
                        Schedule Meeting →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-600" />
              Recent Activity
            </h3>
            
            <div className="space-y-4">
              {dashboardData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'ai-staff' ? 'bg-purple-100 text-purple-600' :
                    activity.type === 'label-offer' ? 'bg-yellow-100 text-yellow-600' :
                    activity.type === 'stream' ? 'bg-green-100 text-green-600' :
                    activity.type === 'collab' ? 'bg-blue-100 text-blue-600' :
                    'bg-pink-100 text-pink-600'
                  }`}>
                    {activity.type === 'ai-staff' ? <Bot className="w-4 h-4" /> :
                     activity.type === 'label-offer' ? <Crown className="w-4 h-4" /> :
                     activity.type === 'stream' ? <Play className="w-4 h-4" /> :
                     activity.type === 'collab' ? <Music className="w-4 h-4" /> :
                     <Heart className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Crown, label: 'Review 80/20 Deal', highlight: user.labelStatus === 'considering' },
              { icon: Bot, label: `Meet ${totalAIStaff} AI Staff` },
              { icon: BarChart, label: 'View Projections' },
              { icon: UserCheck, label: 'Schedule Meeting' }
            ].map((action, index) => (
              <button 
                key={index} 
                onClick={() => {
                  if (action.label === 'Review 80/20 Deal') setCurrentView('label-partnership');
                  if (action.label.includes('AI Staff')) setCurrentView('ai-staff');
                }}
                className={`p-4 rounded-lg border-2 transition-all duration-200 group ${
                  action.highlight 
                    ? 'border-yellow-400 bg-yellow-50 hover:bg-yellow-100' 
                    : 'border-dashed border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                }`}
              >
                <action.icon className={`w-8 h-8 mb-2 mx-auto ${
                  action.highlight ? 'text-yellow-600' : 'text-blue-600'
                }`} />
                <p className={`text-sm font-medium ${
                  action.highlight ? 'text-yellow-800' : 'text-gray-700 group-hover:text-gray-900'
                }`}>
                  {action.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Enhanced AI Staff View
  const AIStaffView = () => {
    const totalAIStaff = Object.values(aiStaffDepartments).reduce((total, dept) => total + dept.agents.length, 0);
    const filteredDepartments = selectedDepartment === 'all' 
      ? aiStaffDepartments 
      : { [selectedDepartment]: aiStaffDepartments[selectedDepartment] };

    return (
      <div className="p-6 space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Meet Your AI Staff Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            {totalAIStaff} AI staff members across 8 specialized departments are ready to work with you 24/7. Each brings unique expertise to accelerate your music career while you keep 80% of all revenues.
          </p>
          
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedDepartment('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedDepartment === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Departments ({totalAIStaff})
            </button>
            {Object.entries(aiStaffDepartments).map(([key, dept]) => (
              <button
                key={key}
                onClick={() => setSelectedDepartment(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                  selectedDepartment === key
                    ? `bg-${dept.color}-600 text-white`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <dept.icon className="w-4 h-4" />
                <span>{dept.name} ({dept.agents.length})</span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Staff by Department */}
        {Object.entries(filteredDepartments).map(([deptKey, dept]) => (
          <div key={deptKey} className="mb-12">
            <div className="flex items-center mb-6">
              <dept.icon className={`w-6 h-6 mr-3 text-${dept.color}-600`} />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{dept.name}</h2>
                <p className="text-gray-600">{dept.description} • {dept.agents.length} AI Agents</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dept.agents.map((agent, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r from-${dept.color}-500 to-blue-500 rounded-full flex items-center justify-center text-2xl`}>
                      {agent.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 flex items-center">
                        {agent.name}
                        <Bot className="w-4 h-4 ml-2 text-purple-500" />
                      </h3>
                      <p className="text-gray-600 text-sm">{agent.role}</p>
                      <p className="text-xs text-gray-500">Specialty: {agent.specialty}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                        <span>Active: {agent.yearsActive}y</span>
                        <span>Success: {agent.successRate}%</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mb-1"></div>
                      <div className="text-xs text-gray-500">Online</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-1">Personality: {agent.personality}</p>
                    <button
                      onClick={() => setExpandedAgent(expandedAgent === `${deptKey}-${index}` ? null : `${deptKey}-${index}`)}
                      className="flex items-center text-xs text-blue-600 hover:text-blue-700"
                    >
                      {expandedAgent === `${deptKey}-${index}` ? (
                        <>
                          <ChevronUp className="w-3 h-3 mr-1" />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3 h-3 mr-1" />
                          Show Background
                        </>
                      )}
                    </button>
                  </div>

                  {expandedAgent === `${deptKey}-${index}` && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <h4 className="text-xs font-medium text-gray-700 mb-2">Background:</h4>
                      <p className="text-xs text-gray-600 mb-3">{agent.backstory}</p>
                      <h4 className="text-xs font-medium text-gray-700 mb-1">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {agent.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                      Schedule Meeting
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
            Why {totalAIStaff} AI Staff Choose You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">94/100</div>
              <div className="text-sm text-gray-600">AI Compatibility Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">340%</div>
              <div className="text-sm text-gray-600">Projected Growth</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">80%</div>
              <div className="text-sm text-gray-600">You Keep</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-gray-600">Support Availability</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Label Partnership View (Updated with 80 staff reference)
  const LabelPartnershipView = () => {
    const totalAIStaff = Object.values(aiStaffDepartments).reduce((total, dept) => total + dept.agents.length, 0);
    
    return (
      <div className="p-6 space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4 flex items-center justify-center">
            <Crown className="w-8 h-8 mr-3 text-yellow-500" />
            TrueFans LABEL 80/20 Partnership
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Congratulations! Based on your performance and AI compatibility score, all {totalAIStaff} AI staff members want to work with you. Review your revolutionary 80/20 partnership offer below.
          </p>
        </div>

        {/* Partnership Offer Card */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Revolutionary 80/20 Partnership</h2>
              <p className="text-gray-600">Personalized for {user.name}</p>
              <p className="text-sm text-green-600 font-semibold mt-1">🎯 Artist-First Revenue Model</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-yellow-600">94/100</div>
              <div className="text-sm text-gray-500">Compatibility Score</div>
            </div>
          </div>

          {/* Revenue Split Visualization */}
          <div className="mb-8 p-6 bg-white rounded-xl border border-yellow-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Revenue Split Breakdown</h3>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-white">80%</span>
                </div>
                <h4 className="font-semibold text-gray-900">You Keep</h4>
                <p className="text-sm text-gray-600">All Revenue Types</p>
                <p className="text-xs text-green-600 font-medium mt-1">
                  ${dashboardData.labelBenefits.projectedArtistShare.toLocaleString()}/month projected
                </p>
              </div>
              <div className="text-4xl text-gray-300">+</div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-white">20%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Label Services</h4>
                <p className="text-sm text-gray-600">{totalAIStaff} AI Staff + Infrastructure</p>
                <p className="text-xs text-blue-600 font-medium mt-1">
                  ${dashboardData.labelBenefits.projectedLabelShare.toLocaleString()}/month projected
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What You Get</h3>
              <div className="space-y-3">
                {[
                  { icon: DollarSign, text: '80% of ALL Revenue Streams', highlight: true },
                  { icon: Bot, text: `${totalAIStaff} Dedicated AI Staff Members`, highlight: true },
                  { icon: Users, text: '890K+ Audience Reach Potential' },
                  { icon: Globe, text: 'Distribution to 150+ Platforms' },
                  { icon: BarChart, text: '$50K Marketing Budget' },
                  { icon: Shield, text: 'Full Rights & Creative Control' },
                  { icon: Clock, text: '24/7 AI Support Across 8 Departments' }
                ].map((benefit, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-2 rounded ${benefit.highlight ? 'bg-yellow-100' : ''}`}>
                    <benefit.icon className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">{benefit.text}</span>
                    {benefit.highlight && <Star className="w-4 h-4 text-yellow-500" />}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Projections</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Current Monthly Revenue</span>
                    <span className="font-bold text-gray-900">${dashboardData.labelBenefits.currentRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Projected Total Revenue</span>
                    <span className="font-bold text-blue-600">${dashboardData.labelBenefits.projectedRevenue.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-green-600 font-medium">Your Share (80%)</span>
                      <span className="font-bold text-green-600">${dashboardData.labelBenefits.projectedArtistShare.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Label Services (20%)</span>
                      <span className="text-gray-500">${dashboardData.labelBenefits.projectedLabelShare.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+${(dashboardData.labelBenefits.projectedArtistShare - dashboardData.labelBenefits.currentRevenue).toLocaleString()}</div>
                    <div className="text-sm text-green-700">Additional Monthly Income</div>
                    <div className="text-xs text-gray-600 mt-1">vs. current independent earnings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 px-6 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
              <Crown className="w-5 h-5" />
              <span>Accept 80/20 Partnership</span>
            </button>
            <button className="px-6 py-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              Schedule Discussion
            </button>
            <button className="px-6 py-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <FileText className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Why We Chose You */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
            <Award className="w-5 h-5 mr-2 text-blue-600" />
            Why All {totalAIStaff} AI Staff Chose You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Growth Trajectory</h4>
              <p className="text-sm text-gray-600 mt-2">Your 12.5% monthly growth rate indicates strong market potential</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Audience Engagement</h4>
              <p className="text-sm text-gray-600 mt-2">8.7% engagement rate is 3x above industry average</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">AI Compatibility</h4>
              <p className="text-sm text-gray-600 mt-2">94/100 compatibility score with our AI systems</p>
            </div>
          </div>
        </div>

        {/* Terms Preview */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Partnership Terms Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Revenue Split</h4>
              <p className="text-gray-600">
                <span className="font-semibold text-green-600">80% Artist</span> / 
                <span className="font-semibold text-blue-600"> 20% Label</span> 
                <span className="block text-xs text-gray-500 mt-1">(Industry revolutionary - applies to ALL revenue)</span>
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">AI Staff Support</h4>
              <p className="text-gray-600">{totalAIStaff} AI agents across 8 departments</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Creative Control</h4>
              <p className="text-gray-600">100% artistic freedom maintained</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Rights</h4>
              <p className="text-gray-600">You retain all master recordings</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Community View (Updated)
  const CommunityView = () => {
    const artists = [
      { name: 'Maya Chen', genre: 'Indie Pop', location: 'San Francisco, CA', skills: ['Vocals', 'Piano'], image: '🎹', matchScore: 94, labelStatus: 'signed' },
      { name: 'Jake Rodriguez', genre: 'Electronic', location: 'Austin, TX', skills: ['Production', 'Synths'], image: '🎛️', matchScore: 89, labelStatus: 'considering' },
      { name: 'Sophia Kim', genre: 'R&B', location: 'Atlanta, GA', skills: ['Vocals', 'Songwriting'], image: '🎤', matchScore: 92, labelStatus: 'independent' }
    ];

    return (
      <div className="p-6 space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            TrueFans LABEL Community
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with artists across all levels - from independent creators to label partners earning 80% of their revenues with 80 AI staff support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                  {artist.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 flex items-center">
                    {artist.name}
                    {artist.labelStatus === 'signed' && <Crown className="w-4 h-4 ml-2 text-yellow-500" />}
                  </h3>
                  <p className="text-gray-600">{artist.genre}</p>
                  <p className="text-sm text-gray-500">{artist.location}</p>
                  <p className="text-xs text-gray-400 capitalize flex items-center mt-1">
                    {artist.labelStatus === 'signed' ? (
                      <>
                        <Crown className="w-3 h-3 mr-1 text-yellow-500" />
                        Label Artist (80%)
                      </>
                    ) : artist.labelStatus === 'considering' ? (
                      <>
                        <Clock className="w-3 h-3 mr-1 text-orange-500" />
                        Considering 80/20 Deal
                      </>
                    ) : (
                      'Independent'
                    )}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-green-600">{artist.matchScore}%</div>
                  <div className="text-xs text-gray-500">Match</div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {artist.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Connect
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-green-600" />
            Active Collaborations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-900 flex items-center">
                Summer Vibes EP
                <Crown className="w-4 h-4 ml-2 text-yellow-500" />
              </h4>
              <p className="text-sm text-gray-600">with Maya Chen (Label Artist - 80%) & Jake Rodriguez</p>
              <p className="text-xs text-gray-500 mb-2">AI Staff: Melody Harrison managing campaign</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">65% Complete</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-900">Midnight Sessions</h4>
              <p className="text-sm text-gray-600">with Sophia Kim (Independent)</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '30%'}}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">30% Complete</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Geographic View (same as before)
  const GeographicView = () => {
    const venues = [
      { name: 'The Troubadour', type: 'Venue', distance: '2.3 mi', capacity: 400, price: '$$$' },
      { name: 'Sound City Studios', type: 'Studio', distance: '5.1 mi', hourly: '$250/hr', price: '$$$$' },
      { name: 'Echo Park Space', type: 'Rehearsal', distance: '1.8 mi', hourly: '$35/hr', price: '$' }
    ];

    return (
      <div className="p-6 space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            TrueFans LABEL Local Scene
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover venues, studios, and events in your area with TrueFans LABEL
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-green-600" />
            Los Angeles Music Scene
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">47</div>
              <div className="text-sm text-gray-600">Active Artists</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">23</div>
              <div className="text-sm text-gray-600">Venues & Studios</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-gray-600">Events This Week</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900">{venue.name}</h3>
                  <p className="text-gray-600">{venue.type}</p>
                </div>
                <span className="text-sm text-blue-600">{venue.distance}</span>
              </div>
              
              <div className="space-y-2 mb-4">
                {venue.capacity && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Capacity:</span>
                    <span className="text-gray-900">{venue.capacity}</span>
                  </div>
                )}
                {venue.hourly && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Rate:</span>
                    <span className="text-gray-900">{venue.hourly}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Price Range:</span>
                  <span className="text-gray-900">{venue.price}</span>
                </div>
              </div>
              
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Simple views for other sections (updated)
  const SimpleView = ({ title, subtitle, color, content }) => (
    <div className="p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-4`}>
          {title}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
        <div className="text-6xl mb-4">🤖</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{content}</h3>
        <p className="text-gray-600 mb-4">
          This AI-powered feature showcase is coming soon to the interactive demo!
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-purple-600">
          <Bot className="w-4 h-4" />
          <span>Powered by 80 AI Staff Members</span>
        </div>
        <div className="mt-3 p-2 bg-green-50 rounded-lg">
          <p className="text-sm text-green-700 font-medium">
            🎯 You keep 80% of all revenues generated
          </p>
        </div>
      </div>
    </div>
  );

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <DashboardView />;
      case 'ai-staff':
        return <AIStaffView />;
      case 'label-partnership':
        return <LabelPartnershipView />;
      case 'community':
        return <CommunityView />;
      case 'geographic':
        return <GeographicView />;
      case 'collaboration':
        return <SimpleView 
          title="TrueFans LABEL Collaboration" 
          subtitle="Real-time collaboration powered by AI staff coordination"
          color="from-blue-600 to-green-600"
          content="AI-Coordinated Collaboration Suite"
        />;
      case 'ai':
        return <SimpleView 
          title="TrueFans LABEL Intelligence Center" 
          subtitle="Advanced AI analytics and autonomous workflow management"
          color="from-purple-600 to-pink-600"
          content="AI Intelligence & Automation Hub"
        />;
      case 'analytics':
        return <SimpleView 
          title="TrueFans LABEL Analytics" 
          subtitle="AI-powered insights and predictive intelligence for label artists"
          color="from-orange-600 to-red-600"
          content="AI-Enhanced Business Intelligence"
        />;
      case 'mentorship':
        return <SimpleView 
          title="TrueFans LABEL Mentorship" 
          subtitle="AI staff mentorship combined with industry veteran guidance"
          color="from-green-600 to-teal-600"
          content="AI + Human Mentorship Programs"
        />;
      case 'advocacy':
        return <SimpleView 
          title="TrueFans LABEL Advocacy" 
          subtitle="AI-powered collective bargaining and fair treatment initiatives"
          color="from-red-600 to-orange-600"
          content="AI-Driven Advocacy Tools"
        />;
      case 'enterprise':
        return <SimpleView 
          title="TrueFans LABEL Operations" 
          subtitle="Complete AI-managed label operations and artist development"
          color="from-purple-600 to-blue-600"
          content="AI Label Management Suite"
        />;
      default:
        return <LandingPage />;
    }
  };

  // Main render logic
  if (currentView === 'landing') {
    return (
      <div>
        <LandingPage />
        {showSelectionProcess && <SelectionProcessModal />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      <Navigation />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          {renderCurrentView()}
        </main>
      </div>
      {showSelectionProcess && <SelectionProcessModal />}
    </div>
  );
};

export default TrueFansApp;
