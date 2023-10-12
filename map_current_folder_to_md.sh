#!/bin/zsh

# Define the folder to map and the output file (current directory)
folder_to_map="./"
output_file="./current-folder-structure.md"

# Check if the folder exists
if [ ! -d "$folder_to_map" ]; then
        echo "Error: Folder '$folder_to_map' does not exist"
        exit 1
fi

# Initialize the output markdown file
echo "# Folder Structure of $folder_to_map" > "$output_file"

# Generate the folder structure while excluding specified directories and files
find "$folder_to_map" \
  \( -name ".angular" -o -name ".vscode" -o -name "node_modules" -o -name "package-lock.json" \) -prune -o \
  \( -type d -or \( -type f -and \( -name "*.json" -o -name "*.pug" -o -name "*.css" -o -name "*.js" -o -name "*.png" \) \) \) -print >> "$output_file"

# Check if the operation was successful
if [ $? -eq 0 ]; then
        echo "Markdown file generated successfully: $output_file"
else
        echo "Error: Failed to generate Markdown file."
        exit 1
fi

