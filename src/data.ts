const notes: Note[] = [
  {
    id: "1",
    title: "React Performance Optimization",
    tags: ["Dev", "React"],
    content: `Key performance optimization techniques:
  
  1. Code Splitting
  - Use React.lazy() for route-based splitting
  - Implement dynamic imports for heavy components
  
  2. Memoization
  - useMemo for expensive calculations
  - useCallback for function props
  - React.memo for component optimization
  
  3. Virtual List Implementation
  - Use react-window for long lists
  - Implement infinite scrolling
  
  TODO: Benchmark current application and identify bottlenecks`,
    lastEdited: "2024-10-29T10:15:00Z",
    isArchived: false,
  },
  {
    id: "2",
    title: "Japan Travel Planning",
    tags: ["Travel", "Personal"],
    content: `Japan Trip Planning - Spring 2025
  
  Itinerary Draft:
  Week 1: Tokyo
  - Shibuya and Harajuku
  - TeamLab Digital Art Museum
  - Day trip to Mount Fuji
  
  Week 2: Kyoto & Osaka
  - Traditional temples
  - Cherry blossom viewing
  - Food tour in Osaka
  
  Budget: $3000
  Accommodation: Mix of hotels and traditional ryokans
  JR Pass: 14 days
  
  TODO: Book flights 6 months in advance`,
    lastEdited: "2024-10-28T16:45:00Z",
    isArchived: false,
  },
  {
    id: "3",
    title: "Favorite Pasta Recipes",
    tags: ["Cooking", "Recipes"],
    content: `Classic Italian Recipes:
  
  1. Carbonara
  - Eggs, pecorino, guanciale
  - No cream ever!
  - Save pasta water
  
  2. Cacio e Pepe
  - Pecorino Romano
  - Fresh black pepper
  - Technique is crucial
  
  3. Arrabbiata
  - San Marzano tomatoes
  - Fresh garlic
  - Red pepper flakes
  
  Note: Always use high-quality ingredients`,
    lastEdited: "2024-10-27T14:30:00Z",
    isArchived: false,
  },
  {
    id: "4",
    title: "TypeScript Migration Guide",
    tags: ["Dev", "React", "TypeScript"],
    content: `Project migration steps:
  
  1. Initial Setup
  - Install TypeScript dependencies
  - Configure tsconfig.json
  - Set up build pipeline
  
  2. Migration Strategy
  - Start with newer modules
  - Add type definitions gradually
  - Use 'any' temporarily for complex cases
  
  3. Testing Approach
  - Update test configuration
  - Add type testing
  - Validate build process
  
  Deadline: End of Q4 2024`,
    lastEdited: "2024-10-26T09:20:00Z",
    isArchived: true,
  },
  {
    id: "5",
    title: "Weekly Workout Plan",
    tags: ["Fitness", "Health"],
    content: `Monday: Upper Body
  - Bench Press 4x8
  - Rows 4x10
  - Shoulder Press 3x12
  - Pull-ups 3 sets
  
  Wednesday: Lower Body
  - Squats 4x8
  - Romanian Deadlifts 3x10
  - Lunges 3x12 each
  - Calf Raises 4x15
  
  Friday: Full Body
  - Deadlifts 3x5
  - Push-ups 3x12
  - Leg Press 3x12
  - Core Work
  
  Cardio: Tuesday/Thursday - 30 min run`,
    lastEdited: "2024-10-25T18:10:00Z",
    isArchived: false,
  },
  {
    id: "6",
    title: "Gift Ideas",
    tags: ["Personal", "Shopping"],
    content: `Birthday and Holiday Gift List:
  
  Mom:
  - Cooking class subscription
  - Kindle Paperwhite
  - Spa day package
  
  Dad:
  - Golf lessons
  - Wireless earbuds
  - BBQ accessories
  
  Sister:
  - Art supplies set
  - Yoga mat kit
  - Coffee subscription
  
  Budget per person: $150-200`,
    lastEdited: "2024-10-20T11:30:15Z",
    isArchived: true,
  },
  {
    id: "7",
    title: "React Component Library",
    tags: ["Dev", "React"],
    content: `Custom Component Library Structure:
  
  1. Basic Components
  - Button
  - Input
  - Card
  - Modal
  
  2. Form Components
  - FormField
  - Select
  - Checkbox
  - RadioGroup
  
  3. Layout Components
  - Container
  - Grid
  - Flex
  
  All components need:
  - TypeScript definitions
  - Unit tests
  - Storybook documentation
  - Accessibility support`,
    lastEdited: "2024-10-15T14:23:45Z",
    isArchived: true,
  },
  {
    id: "8",
    title: "Meal Prep Ideas",
    tags: ["Cooking", "Health", "Recipes"],
    content: `Weekly Meal Prep Plan:
  
  Breakfast Options:
  - Overnight oats
  - Egg muffins
  - Smoothie packs
  
  Lunch Containers:
  - Greek chicken bowl
  - Buddha bowls
  - Tuna pasta salad
  
  Snacks:
  - Cut vegetables
  - Mixed nuts
  - Greek yogurt parfait
  
  Prep Time: Sunday 2-4pm
  Storage: Glass containers
  Lasts: 4-5 days`,
    lastEdited: "2024-10-12T09:45:15Z",
    isArchived: false,
  },
  {
    id: "9",
    title: "Reading List",
    tags: ["Personal", "Dev"],
    content: `Current Reading Queue:
  
  1. Technical Books
  - Clean Architecture by Robert Martin
  - Designing Data-Intensive Applications
  - TypeScript Design Patterns
  
  2. Personal Development
  - Deep Work by Cal Newport
  - Atomic Habits
  - The Psychology of Money
  
  Currently Reading: Clean Architecture
  Next Up: Deep Work
  
  Goal: One book per month`,
    lastEdited: "2024-10-05T12:20:30Z",
    isArchived: false,
  },
  {
    id: "10",
    title: "Fitness Goals 2025",
    tags: ["Fitness", "Health", "Personal"],
    content: `2025 Fitness Objectives:
  
  1. Strength Goals
  - Bench press: 225 lbs
  - Squat: 315 lbs
  - Deadlift: 405 lbs
  
  2. Cardio Goals
  - Run half marathon
  - 5k under 25 minutes
  
  3. Habits
  - Gym 4x per week
  - Daily 10k steps
  - Sleep 7+ hours
  
  Track all workouts in Strong app`,
    lastEdited: "2024-09-22T07:30:00Z",
    isArchived: false,
  },
];

export default notes;
